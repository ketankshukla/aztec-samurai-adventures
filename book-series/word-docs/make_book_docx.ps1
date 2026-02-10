# make_book_docx.ps1
# Usage: .\make_book_docx.ps1 -BookFolder "Book 01 - Sunblade Rising"
# Combines chapter_*.md files into a single DOCX with page breaks between chapters.

param(
  [Parameter(Mandatory=$true)]
  [string]$BookFolder
)

$ErrorActionPreference = "Stop"

$bookPath = Join-Path "E:\aztec-samurai-adventures\book-series" $BookFolder
$chaptersPath = Join-Path $bookPath "chapters"

if (-not (Test-Path $chaptersPath)) { throw "Chapters folder not found: $chaptersPath" }

# --- Find pandoc.exe ---
$pandocCmd = Get-Command pandoc -ErrorAction SilentlyContinue
if ($pandocCmd) {
  $pandoc = $pandocCmd.Source
} else {
  $common = @(@(
    Join-Path $env:LOCALAPPDATA "Pandoc\pandoc.exe"
    Join-Path $env:ProgramFiles "Pandoc\pandoc.exe"
    Join-Path ${env:ProgramFiles(x86)} "Pandoc\pandoc.exe"
  ) | Where-Object { $_ -and (Test-Path $_) })

  if ($common.Count -gt 0) {
    $pandoc = $common[0]
  } else {
    $winGetRoot = Join-Path $env:LOCALAPPDATA "Microsoft\WinGet\Packages"
    if (Test-Path $winGetRoot) {
      $found = Get-ChildItem -Path $winGetRoot -Recurse -Filter "pandoc.exe" -ErrorAction SilentlyContinue |
               Select-Object -First 1
      if ($found) { $pandoc = $found.FullName }
    }
  }
  if (-not $pandoc) { throw "pandoc.exe not found." }
}

# --- BOM-free UTF-8 ---
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)

# --- Get chapters ---
$files = Get-ChildItem -Path $chaptersPath -File -Filter "chapter_*.md" | Sort-Object Name
if (-not $files -or $files.Count -eq 0) { throw "No chapter_*.md files found in: $chaptersPath" }

# --- Output paths ---
$outDir = "E:\aztec-samurai-adventures\book-series\word-docs"
$outMd  = Join-Path $outDir "_temp_combined.md"
$outDoc = Join-Path $outDir "$BookFolder.docx"
Remove-Item $outMd  -ErrorAction SilentlyContinue
Remove-Item $outDoc -ErrorAction SilentlyContinue

# --- Page break ---
$pageBreak = '```{=openxml}' + "`r`n" + '<w:p><w:r><w:br w:type="page"/></w:r></w:p>' + "`r`n" + '```'

# --- Build combined document ---
$sb = New-Object System.Text.StringBuilder

for ($i = 0; $i -lt $files.Count; $i++) {

  if ($i -gt 0) {
    [void]$sb.AppendLine("")
    [void]$sb.AppendLine($pageBreak)
    [void]$sb.AppendLine("")
  }

  $content = [System.IO.File]::ReadAllText($files[$i].FullName, $utf8NoBom)

  # Remove existing title line
  $content = [regex]::Replace($content, '(?m)^\s*Chapter\s+\d+.*(\r?\n){1,2}', '')

  # Build heading from filename
  $base = $files[$i].BaseName
  if ($base -match '^chapter_(\d+)_+(.*)$') {
    $num  = [int]$Matches[1]
    $slug = ($Matches[2] -replace '_', ' ')
    $slug = (Get-Culture).TextInfo.ToTitleCase($slug.ToLower())
    [void]$sb.AppendLine("# Chapter $num - $slug")
  } else {
    [void]$sb.AppendLine("# $base")
  }

  [void]$sb.AppendLine("")
  [void]$sb.Append($content.Trim())
  [void]$sb.AppendLine("")
}

# Write and convert
[System.IO.File]::WriteAllText($outMd, $sb.ToString(), $utf8NoBom)
& $pandoc $outMd '--from=markdown+raw_attribute' '--to=docx' '-o' $outDoc
Remove-Item $outMd -ErrorAction SilentlyContinue

Write-Host "Created: $outDoc"
