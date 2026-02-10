# Combine all chapter_*.md into ONE Word doc:
# - auto chapter heading from filename
# - strip all markdown formatting to plain text
# - start each chapter on a fresh page
# Folder: E:\aztec-samurai-adventures\book-series\Book 01 - Sunblade Rising\chapters

$chaptersPath = "E:\aztec-samurai-adventures\book-series\Book 01 - Sunblade Rising\chapters"
Set-Location $chaptersPath

# Find pandoc (works even if pandoc isn't on PATH yet)
$pandocCmd = Get-Command pandoc -ErrorAction SilentlyContinue
if ($pandocCmd) {
  $pandoc = $pandocCmd.Source
} else {
  $searchRoots = @(
    "$env:ProgramFiles",
    "${env:ProgramFiles(x86)}",
    "$env:LOCALAPPDATA\Microsoft\WinGet\Packages",
    "$env:LOCALAPPDATA"
  ) | Where-Object { $_ -and (Test-Path $_) }

  $found = Get-ChildItem -Path $searchRoots -Recurse -Filter "pandoc.exe" -ErrorAction SilentlyContinue |
           Select-Object -First 1

  if (-not $found) { throw "pandoc.exe not found. Reopen PowerShell, or install again, then retry." }
  $pandoc = $found.FullName
}

$files  = Get-ChildItem -File -Filter "chapter_*.md" | Sort-Object Name
$outMd  = Join-Path $chaptersPath "Book01_CLEAN.md"
$outDoc = Join-Path $chaptersPath "Book 01 - Sunblade Rising.docx"

Remove-Item $outMd -ErrorAction SilentlyContinue

# Reliable Word page break (OpenXML raw block)
$pageBreak = @'
```{=openxml}
<w:p><w:r><w:br w:type="page"/></w:r></w:p>
