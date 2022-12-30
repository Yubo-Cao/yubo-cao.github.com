from collections.abc import Iterable
from pathlib import Path
from string import ascii_lowercase

from fontTools.subset import Options, Subsetter
from fontTools.ttLib import TTFont
from yaml import safe_load
from json import dump


def trim(
    font_path: Path,
    codepoints: Path,
    output: Path,
    icons: Iterable[str],
    text: str = "",
    generate_codepoints: bool = False,
) -> set[str]:
    try:
        font = TTFont(font_path)
    except:
        print(f"Failed to open {font_path}")
        return icons

    with codepoints.open("r") as f:
        codepoints = {
            name: int(codepoint, 16)
            for name, codepoint in [line.split() for line in f.read().splitlines()]
        }

    opt = Options()
    opt.layout_closure = False
    subsetter = Subsetter(opt)
    subsetter.populate(
        text="".join(chr(codepoints[icon]) for icon in icons if icon in codepoints)
        + text
    )
    subsetter.subset(font)

    output.parent.mkdir(parents=True, exist_ok=True)
    with output.open("wb") as f:
        font.save(f)

    if generate_codepoints:
        with (output.parent / f"{output.stem}.json").open("w") as f:
            dump(
                {
                    name: f"\\{codepoints[name]:04x}"
                    for name in icons
                    if name in codepoints
                },
                f,
            )

    return set(icon for icon in icons if icon not in codepoints)


def main():
    root = Path(__file__).resolve().parent
    project_root = root.parent.parent.parent
    fonts_path = root.parent / "assets" / "fonts"
    codepoints_path = root.parent / "assets" / "codepoints"
    output_path = project_root / "components" / "fonts"

    fonts = {font_path.stem: font_path for font_path in fonts_path.glob("*")}
    used: dict[str, list[str]] = safe_load((root.parent / "used.yaml").read_text())
    for font, icons in used.items():
        if font not in fonts:
            print(f"Missing font: {font}")
            continue
        trim(
            fonts[font],
            codepoints_path / f"{font}.txt",
            output_path / f"{font}.woff2",
            icons,
            text=ascii_lowercase + "_" if "material" in font.lower() else "",
            generate_codepoints="fa" in font.lower(),
        )


if __name__ == "__main__":
    main()
