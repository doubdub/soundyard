#!/usr/bin/env python3
"""Generate the local SVG thumbnails used by SoundYard (no external images)."""
import os

OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "assets")
os.makedirs(OUT, exist_ok=True)

INK = "#1E232A"
DARK = "#2C323A"
STEEL = "#B9BEC5"
CREAM = "#E8E2D4"
SHADOW = '<ellipse cx="400" cy="500" rx="212" ry="20" fill="#111827" opacity="0.07"/>'


def wrap(body, shadow=SHADOW, bg="#F4F5F7"):
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
<rect width="800" height="600" fill="{bg}"/>
{shadow}
{body}
</svg>
'''


def mk(name, body, **kw):
    with open(os.path.join(OUT, name), "w", encoding="utf-8") as f:
        f.write(wrap(body, **kw))


# ---------------------------------------------------------------- microphone
mic_grille = "\n".join(
    f'<line x1="{x}" y1="96" x2="{x}" y2="212" stroke="#59606A" stroke-width="2"/>'
    for x in range(364, 440, 8)
) + "\n" + "\n".join(
    f'<line x1="356" y1="{y}" x2="444" y2="{y}" stroke="#59606A" stroke-width="2"/>'
    for y in range(112, 214, 12)
)
mic = f'''
<defs><clipPath id="g"><rect x="356" y="96" width="88" height="120" rx="44"/></clipPath></defs>
<g stroke="{INK}" stroke-width="4" stroke-linejoin="round">
  <rect x="356" y="96" width="88" height="120" rx="44" fill="#363C45"/>
  <g clip-path="url(#g)">{mic_grille}</g>
  <rect x="356" y="96" width="88" height="120" rx="44" fill="none"/>
  <path d="M366 212h68l-7 118q-2 32-2 64h-9v34h-32v-34h-9q0-32-2-64z" fill="#2F353D"/>
  <rect x="389" y="318" width="22" height="14" rx="2" fill="#B03A2E" stroke="none"/>
  <path d="M380 430h40" stroke-width="3"/>
  <rect x="378" y="444" width="44" height="12" rx="3" fill="#3B424B"/>
</g>
'''
mk("mic-tlm103.svg", mic, shadow='<ellipse cx="400" cy="474" rx="96" ry="14" fill="#111827" opacity="0.08"/>')

# ---------------------------------------------------------------- neve 1073
knob_small = lambda cx, cy: f'<circle cx="{cx}" cy="{cy}" r="9" fill="{CREAM}" stroke="{INK}" stroke-width="2.5"/><line x1="{cx}" y1="{cy}" x2="{cx}" y2="{cy-6}" stroke="{INK}" stroke-width="2"/>'
neve = f'''
<g stroke="{INK}" stroke-width="4" stroke-linejoin="round">
  <rect x="146" y="198" width="508" height="192" rx="8" fill="#39424E"/>
  <rect x="122" y="204" width="28" height="180" rx="4" fill="#2F3742"/>
  <rect x="650" y="204" width="28" height="180" rx="4" fill="#2F3742"/>
  <rect x="154" y="206" width="492" height="176" rx="3" fill="#414B58" stroke-width="2"/>
  <rect x="308" y="242" width="184" height="96" rx="5" fill="{CREAM}"/>
  <path d="M324 316a76 76 0 0 1 152 0" fill="none" stroke="#8A8578" stroke-width="2"/>
  <line x1="400" y1="316" x2="452" y2="262" stroke="#8A3B32" stroke-width="2.5"/>
  <circle cx="400" cy="316" r="3" fill="{INK}" stroke="none"/>
</g>
<g stroke="{INK}" stroke-width="2.5">
  <circle cx="204" cy="248" r="24" fill="{CREAM}"/><line x1="204" y1="248" x2="204" y2="234" stroke-width="3"/>
  <circle cx="204" cy="326" r="16" fill="{CREAM}"/><line x1="204" y1="326" x2="216" y2="318"/>
  <circle cx="262" cy="248" r="16" fill="{CREAM}"/><line x1="262" y1="248" x2="250" y2="240"/>
  <circle cx="262" cy="326" r="24" fill="{CREAM}"/><line x1="262" y1="326" x2="274" y2="316" stroke-width="3"/>
  <circle cx="566" cy="248" r="24" fill="{CREAM}"/><line x1="566" y1="248" x2="566" y2="234" stroke-width="3"/>
  <circle cx="566" cy="326" r="16" fill="{CREAM}"/><line x1="566" y1="326" x2="554" y2="318"/>
  <circle cx="622" cy="248" r="16" fill="{CREAM}"/><line x1="622" y1="248" x2="634" y2="240"/>
  <circle cx="622" cy="326" r="16" fill="{CREAM}"/><line x1="622" y1="326" x2="622" y2="314"/>
  <circle cx="204" cy="366" r="7" fill="#B03A2E"/><circle cx="262" cy="366" r="7" fill="#B03A2E"/>
</g>
<g fill="{CREAM}" stroke="{INK}" stroke-width="2">
  <rect x="172" y="214" width="26" height="14" rx="2"/>
  <rect x="172" y="374" width="26" height="14" rx="2"/>
  <rect x="602" y="214" width="26" height="14" rx="2"/>
  <rect x="602" y="374" width="26" height="14" rx="2"/>
</g>
<g fill="#5B6675" stroke="none">
  <circle cx="160" cy="218" r="2.5"/><circle cx="160" cy="374" r="2.5"/>
  <circle cx="640" cy="218" r="2.5"/><circle cx="640" cy="374" r="2.5"/>
</g>
'''
mk("outboard-neve1073.svg", neve)

# ---------------------------------------------------------------- api 512c
api = f'''
<g stroke="{INK}" stroke-width="4" stroke-linejoin="round">
  <rect x="306" y="92" width="188" height="412" rx="8" fill="#C7CACF"/>
  <rect x="318" y="104" width="164" height="388" rx="4" fill="#D2D5D9" stroke-width="2"/>
  <rect x="330" y="120" width="140" height="66" rx="3" fill="{CREAM}"/>
  <path d="M340 172a60 60 0 0 1 120 0" fill="none" stroke="#8A8578" stroke-width="2"/>
  <line x1="400" y1="172" x2="438" y2="134" stroke="#8A3B32" stroke-width="2.5"/>
  <circle cx="400" cy="250" r="40" fill="#242A31"/>
  <circle cx="400" cy="250" r="28" fill="#333A43" stroke-width="2"/>
  <line x1="400" y1="250" x2="400" y2="226" stroke="{CREAM}" stroke-width="4"/>
  <circle cx="356" cy="330" r="17" fill="#242A31"/><line x1="356" y1="330" x2="368" y2="322" stroke="{CREAM}" stroke-width="3"/>
  <circle cx="444" cy="330" r="17" fill="#242A31"/><line x1="444" y1="330" x2="432" y2="322" stroke="{CREAM}" stroke-width="3"/>
  <circle cx="356" cy="388" r="17" fill="#242A31"/><line x1="356" y1="388" x2="356" y2="374" stroke="{CREAM}" stroke-width="3"/>
  <circle cx="444" cy="388" r="17" fill="#242A31"/><line x1="444" y1="388" x2="456" y2="380" stroke="{CREAM}" stroke-width="3"/>
  <rect x="344" y="424" width="112" height="26" rx="3" fill="#3A4149"/>
  <circle cx="374" cy="437" r="5" fill="#B03A2E" stroke="none"/>
  <circle cx="400" cy="437" r="5" fill="#7B828B" stroke="none"/>
</g>
<g stroke="{INK}" stroke-width="2" fill="#9DA3AB">
  <rect x="322" y="72" width="156" height="20" rx="4"/>
  <rect x="322" y="504" width="156" height="20" rx="4"/>
</g>
'''
mk("outboard-api512.svg", api)

# ---------------------------------------------------------------- genelec pair
def monitor(x, y, w, h, cabinet, woofer, tweeter="#3A3F47", led="#2E9E5B", label=None):
    cx = x + w / 2
    wy = y + h * 0.55
    return f'''
  <rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{w*0.06:.0f}" fill="{cabinet}" stroke="{INK}" stroke-width="4"/>
  <rect x="{x+10}" y="{y+12}" width="{w-20}" height="{h-24}" rx="6" fill="none" stroke="#000" stroke-opacity="0.07" stroke-width="3"/>
  <circle cx="{cx}" cy="{wy}" r="{w*0.31:.0f}" fill="{woofer}" stroke="{INK}" stroke-width="3"/>
  <circle cx="{cx}" cy="{wy}" r="{w*0.22:.0f}" fill="#4A5058" stroke="#6C737C" stroke-width="2"/>
  <circle cx="{cx}" cy="{wy}" r="{w*0.09:.0f}" fill="#8D949D" stroke="none"/>
  <circle cx="{cx}" cy="{y+h*0.24:.0f}" r="{w*0.115:.0f}" fill="{tweeter}" stroke="{INK}" stroke-width="3"/>
  <circle cx="{cx}" cy="{y+h*0.24:.0f}" r="{w*0.045:.0f}" fill="#767D86" stroke="none"/>
  <circle cx="{x+w*0.16:.0f}" cy="{y+h*0.9:.0f}" r="4" fill="{led}" stroke="none"/>
'''
genelec = f'''
<g stroke-linejoin="round">
  {monitor(216, 196, 178, 268, "#CFD3D7", "#2F353D")}
  {monitor(412, 176, 178, 268, "#D6D9DC", "#2F353D")}
</g>
<rect x="436" y="452" width="130" height="10" rx="3" fill="#3A4048" stroke="{INK}" stroke-width="3"/>
'''
mk("speaker-genelec8030.svg", genelec)

# ---------------------------------------------------------------- yamaha hs8
def hs8(x, y, w, h):
    cx = x + w / 2
    return f'''
  <rect x="{x}" y="{y}" width="{w}" height="{h}" rx="6" fill="#F0EFEB" stroke="{INK}" stroke-width="4"/>
  <circle cx="{cx}" cy="{y+h*0.58:.0f}" r="{w*0.33:.0f}" fill="#E0AE3C" stroke="{INK}" stroke-width="3"/>
  <circle cx="{cx}" cy="{y+h*0.58:.0f}" r="{w*0.22:.0f}" fill="#F3D07E" stroke="#B9892C" stroke-width="2"/>
  <circle cx="{cx}" cy="{y+h*0.58:.0f}" r="{w*0.1:.0f}" fill="#FBFAF5" stroke="#B9892C" stroke-width="2"/>
  <circle cx="{cx}" cy="{y+h*0.25:.0f}" r="{w*0.12:.0f}" fill="#2E343B" stroke="{INK}" stroke-width="3"/>
  <circle cx="{x+w*0.18:.0f}" cy="{y+h*0.86:.0f}" r="4" fill="#2E9E5B" stroke="none"/>
  <rect x="{x+w*0.2:.0f}" y="{y+h*0.06:.0f}" width="{w*0.6:.0f}" height="3" rx="1.5" fill="#C9C7C0" stroke="none"/>
'''
hs8s = f'''
<g stroke-linejoin="round">
  {hs8(214, 190, 180, 274)}
  {hs8(412, 172, 180, 274)}
</g>
<rect x="425" y="450" width="140" height="10" rx="3" fill="#3A4048" stroke="{INK}" stroke-width="3"/>
'''
mk("speaker-hs8.svg", hs8s)

# ---------------------------------------------------------------- apollo twin x
apollo = f'''
<g stroke="{INK}" stroke-width="4" stroke-linejoin="round">
  <path d="M170 262l24-26h436l24 26z" fill="#A9AEB5"/>
  <rect x="170" y="262" width="484" height="156" rx="10" fill="#BEC2C8"/>
  <rect x="184" y="276" width="456" height="128" rx="6" fill="#C9CDD2" stroke-width="2"/>
  <circle cx="274" cy="338" r="34" fill="#2C323A"/>
  <circle cx="274" cy="338" r="24" fill="#3A414A" stroke-width="2"/>
  <line x1="274" y1="338" x2="274" y2="318" stroke="{CREAM}" stroke-width="4"/>
  <circle cx="366" cy="338" r="22" fill="#2C323A"/>
  <line x1="366" y1="338" x2="378" y2="330" stroke="{CREAM}" stroke-width="3"/>
  <rect x="424" y="296" width="120" height="62" rx="4" fill="#232A32" stroke-width="3"/>
  <rect x="436" y="308" width="96" height="38" rx="2" fill="#3E5A6B" stroke="none"/>
  <path d="M444 338l14-14 10 10 14-18 12 12" fill="none" stroke="#9CC6D8" stroke-width="2.5"/>
  <circle cx="588" cy="318" r="13" fill="#2C323A"/><circle cx="588" cy="318" r="6" fill="#171C22" stroke="none"/>
  <circle cx="588" cy="358" r="13" fill="#2C323A"/><circle cx="588" cy="358" r="6" fill="#171C22" stroke="none"/>
  <circle cx="220" cy="318" r="13" fill="#2C323A"/><circle cx="220" cy="318" r="6" fill="#171C22" stroke="none"/>
  <circle cx="220" cy="358" r="13" fill="#2C323A"/><circle cx="220" cy="358" r="6" fill="#171C22" stroke="none"/>
</g>
<g stroke="none" fill="#8C929A">
  <rect x="192" y="398" width="44" height="9" rx="3"/>
  <rect x="588" y="398" width="44" height="9" rx="3"/>
</g>
'''
mk("interface-apollo.svg", apollo)

# ---------------------------------------------------------------- babyface pro
baby = f'''
<g stroke="{INK}" stroke-width="4" stroke-linejoin="round">
  <rect x="236" y="286" width="328" height="130" rx="16" fill="#3A4149"/>
  <rect x="250" y="300" width="300" height="102" rx="10" fill="#454D56" stroke-width="2"/>
  <circle cx="334" cy="350" r="21" fill="#232A32"/><circle cx="334" cy="350" r="15" fill="none" stroke="#5D6670" stroke-width="2"/>
  <circle cx="334" cy="350" r="5" fill="#171C22" stroke="none"/>
  <circle cx="392" cy="350" r="21" fill="#232A32"/><circle cx="392" cy="350" r="15" fill="none" stroke="#5D6670" stroke-width="2"/>
  <circle cx="392" cy="350" r="5" fill="#171C22" stroke="none"/>
  <circle cx="494" cy="350" r="36" fill="#232A32"/>
  <circle cx="494" cy="350" r="25" fill="#333B44" stroke-width="2"/>
  <line x1="494" y1="350" x2="494" y2="330" stroke="{CREAM}" stroke-width="4"/>
  <circle cx="286" cy="322" r="4" fill="#2E9E5B" stroke="none"/>
</g>
<path d="M420 286v-46h44" fill="none" stroke="{STEEL}" stroke-width="5"/>
'''
mk("interface-babyface.svg", baby)

# ---------------------------------------------------------------- SSL SiX
faders = "\n".join(
    f'<rect x="{x}" y="300" width="10" height="86" rx="4" fill="#171C22" stroke="none"/>'
    f'<rect x="{x-6}" y="{y}" width="22" height="16" rx="3" fill="#D8D3C8" stroke="{INK}" stroke-width="2"/>'
    for x, y in [(206, 318), (258, 330), (310, 306), (362, 336), (414, 322), (466, 342), (518, 314), (570, 332)]
)
sslsix = f'''
<g stroke="{INK}" stroke-width="4" stroke-linejoin="round">
  <path d="M140 250l22-20h476l22 20z" fill="#3C424A"/>
  <rect x="140" y="250" width="520" height="176" rx="6" fill="#2E343B"/>
  <rect x="154" y="264" width="492" height="148" rx="3" fill="#363D45" stroke-width="2"/>
  {faders}
</g>
<g stroke="{INK}" stroke-width="2.5">
  <circle cx="206" cy="284" r="7" fill="#D8D3C8"/><circle cx="258" cy="284" r="7" fill="#D8D3C8"/>
  <circle cx="310" cy="284" r="7" fill="#D8D3C8"/><circle cx="362" cy="284" r="7" fill="#D8D3C8"/>
  <circle cx="414" cy="284" r="7" fill="#D8D3C8"/><circle cx="466" cy="284" r="7" fill="#D8D3C8"/>
  <circle cx="518" cy="284" r="7" fill="#D8D3C8"/><circle cx="570" cy="284" r="7" fill="#D8D3C8"/>
</g>
<g stroke="none">
  <rect x="594" y="300" width="36" height="12" rx="2" fill="#6E7A88"/>
  <rect x="594" y="322" width="36" height="8" rx="2" fill="#5A6572"/>
  <rect x="594" y="340" width="36" height="8" rx="2" fill="#5A6572"/>
  <rect x="594" y="378" width="36" height="10" rx="2" fill="#B03A2E"/>
</g>
<circle cx="612" cy="368" r="5" fill="#2E9E5B" stroke="none"/>
'''
mk("mixer-sslsix.svg", sslsix)

# ---------------------------------------------------------------- software
ableton = f'''
<g stroke="{INK}" stroke-width="4" stroke-linejoin="round">
  <path d="M214 344l18-236h336l18 236z" fill="#2A3038"/>
  <rect x="240" y="126" width="320" height="202" rx="3" fill="#1C2229" stroke-width="2"/>
  <rect x="240" y="126" width="320" height="18" fill="#333B45" stroke="none"/>
  <rect x="252" y="158" width="70" height="158" fill="#242B33" stroke="none"/>
  <g stroke="none">
    <rect x="262" y="168" width="50" height="6" rx="2" fill="#5C6673"/>
    <rect x="262" y="182" width="34" height="6" rx="2" fill="#4B545F"/>
    <rect x="262" y="196" width="42" height="6" rx="2" fill="#4B545F"/>
    <rect x="262" y="220" width="50" height="6" rx="2" fill="#5C6673"/>
    <rect x="262" y="234" width="28" height="6" rx="2" fill="#4B545F"/>
  </g>
  <g stroke="none">
    <rect x="336" y="166" width="58" height="44" rx="2" fill="#3F6E8C"/>
    <rect x="400" y="166" width="84" height="44" rx="2" fill="#4E5B68"/>
    <rect x="336" y="220" width="34" height="54" rx="2" fill="#4E5B68"/>
    <rect x="376" y="220" width="70" height="54" rx="2" fill="#7A6A4F"/>
    <rect x="452" y="220" width="28" height="54" rx="2" fill="#4E5B68"/>
    <rect x="336" y="284" width="144" height="26" rx="2" fill="#2E3740"/>
    <path d="M340 300l10-8 8 6 12-10 10 8 12-6 14 10 12-8 16 8" fill="none" stroke="#6FA3BB" stroke-width="2"/>
  </g>
  <path d="M196 344h408l16 62H180z" fill="#C9CDD2"/>
  <path d="M196 344h408l4 16H192z" fill="#E3E5E8" stroke="none"/>
  <g fill="#9AA0A8" stroke="none">
    <rect x="214" y="372" width="372" height="34" rx="3"/>
  </g>
</g>
'''
mk("software-ableton.svg", ableton)

# ---------------------------------------------------------------- nord stage
nord_keys = "\n".join(
    f'<rect x="{x}" y="382" width="20" height="46" fill="#FBFBF8" stroke="#8D8D86" stroke-width="1.5"/>'
    for x in range(212, 600, 20)
)
nord_black = "\n".join(
    f'<rect x="{x}" y="382" width="12" height="28" fill="#1C2027" stroke="none"/>'
    for x in range(222, 596, 20) if (x - 222) // 20 % 7 not in (2, 6)
)
nord = f'''
<g stroke="{INK}" stroke-width="4" stroke-linejoin="round">
  <path d="M188 258h424l18 124H170z" fill="#B23A32"/>
  <path d="M188 258h424l4 26H184z" fill="#C7473E" stroke="none"/>
  <rect x="200" y="292" width="400" height="76" rx="4" fill="#3A3F46" stroke-width="3"/>
  <g stroke="{CREAM}" stroke-width="2" fill="none">
    <circle cx="238" cy="318" r="10"/><circle cx="280" cy="318" r="10"/>
    <circle cx="322" cy="318" r="10"/><circle cx="364" cy="318" r="10"/>
    <circle cx="430" cy="318" r="8"/><circle cx="462" cy="318" r="8"/>
    <rect x="500" y="306" width="76" height="26" rx="3"/>
  </g>
  <path d="M176 368h448l10 60H166z" fill="#A93028"/>
  {nord_keys}
  {nord_black}
  <path d="M166 428h458l-4 22H172z" fill="#8E2620"/>
</g>
<rect x="240" y="450" width="14" height="34" fill="#2C323A" stroke="{INK}" stroke-width="3"/>
<rect x="546" y="450" width="14" height="34" fill="#2C323A" stroke="{INK}" stroke-width="3"/>
'''
mk("keyboard-nord.svg", nord)

# ---------------------------------------------------------------- roland fp30x
fp_keys = "\n".join(
    f'<rect x="{x}" y="334" width="18" height="40" fill="#FDFDFB" stroke="#B9B7AE" stroke-width="1.4"/>'
    for x in range(236, 568, 18)
)
fp_black = "\n".join(
    f'<rect x="{x}" y="334" width="11" height="24" fill="#22262C" stroke="none"/>'
    for x in range(245, 566, 18) if (x - 245) // 18 % 7 not in (2, 6)
)
fp = f'''
<g stroke="{INK}" stroke-width="4" stroke-linejoin="round">
  <path d="M196 254l18-18h376l18 18z" fill="#E7E5DE"/>
  <rect x="196" y="254" width="412" height="140" rx="8" fill="#F4F2EC"/>
  <rect x="214" y="272" width="376" height="42" rx="3" fill="#E4E2DB" stroke-width="2"/>
  <g stroke="none">
    <rect x="230" y="284" width="54" height="14" rx="2" fill="#C9C6BD"/>
    <rect x="300" y="284" width="26" height="14" rx="2" fill="#C9C6BD"/>
    <rect x="336" y="284" width="26" height="14" rx="2" fill="#C9C6BD"/>
    <rect x="372" y="284" width="52" height="14" rx="2" fill="#C9C6BD"/>
  </g>
  <rect x="214" y="322" width="376" height="56" rx="3" fill="#E9E7E0" stroke-width="2"/>
  {fp_keys}
  {fp_black}
</g>
<rect x="238" y="394" width="12" height="66" fill="#D9D6CE" stroke="{INK}" stroke-width="3"/>
<rect x="552" y="394" width="12" height="66" fill="#D9D6CE" stroke="{INK}" stroke-width="3"/>
<rect x="222" y="456" width="360" height="10" rx="3" fill="#C9C6BE" stroke="{INK}" stroke-width="3"/>
'''
mk("keyboard-fp30x.svg", fp)

# ---------------------------------------------------------------- guitars
BODY = ("M 250 200 C 300 188 360 196 395 215 C 415 200 438 208 440 225 "
        "C 442 240 430 252 410 256 C 400 258 392 262 390 268 "
        "C 392 276 400 280 412 282 C 430 286 442 298 440 314 "
        "C 438 334 420 346 400 344 C 380 342 360 350 350 368 "
        "C 330 395 290 402 262 386 C 236 372 224 342 230 316 "
        "C 232 300 238 288 248 280 C 234 270 228 252 236 234 "
        "C 244 214 262 202 280 200 Z")
PICKGUARD = ("M 322 236 C 352 226 386 234 402 254 L 414 276 "
             "C 422 292 420 316 408 332 L 392 350 C 372 362 346 358 330 344 "
             "L 316 326 C 306 312 306 292 312 274 L 316 254 C 318 244 320 240 322 236 Z")


def guitar_svg(name, body_fill, burst, pickguard, pickup_fill, bridge_x, neck_end, head_end, strings, pickups, knobs):
    string_lines = "\n".join(
        '<line x1="%s" y1="%.1f" x2="%s" y2="%.1f" stroke="#DAD6CB" stroke-width="1.3" opacity=".9"/>'
        % (bridge_x + 10, 262 + i * 5.4, neck_end, 262 + i * 5.4)
        for i in range(strings)
    )
    pickup_markup = "\n".join(
        f'''<g transform="rotate(-2 {x} {y})">
          <rect x="{x}" y="{y}" width="15" height="62" rx="4" fill="{pickup_fill}" stroke="{INK}" stroke-width="2.5"/>
          <g fill="#9AA0A8" stroke="none">
            <circle cx="{x+7.5}" cy="{y+12}" r="2"/><circle cx="{x+7.5}" cy="{y+27}" r="2"/>
            <circle cx="{x+7.5}" cy="{y+42}" r="2"/><circle cx="{x+7.5}" cy="{y+56}" r="2"/>
          </g>
        </g>''' for x, y in pickups
    )
    knob_markup = "\n".join(
        f'<circle cx="{x}" cy="{y}" r="9" fill="#D8D3C8" stroke="{INK}" stroke-width="2.5"/>'
        for x, y in knobs
    )
    frets = "\n".join(
        f'<line x1="{x}" y1="254" x2="{x}" y2="290" stroke="#8A6B3F" stroke-width="1.6"/>'
        for x in range(450, neck_end - 8, 19)
    )
    tuners = "\n".join(
        f'<circle cx="{neck_end + 16 + i * (head_end - neck_end - 30) / (strings - 1):.1f}" cy="245" r="3.6" fill="#C9CDD2" stroke="{INK}" stroke-width="2"/>'
        for i in range(strings)
    )
    body = f'''
<defs>
  <clipPath id="bodyclip"><path d="{BODY}"/></clipPath>
</defs>
<g transform="rotate(-14 400 300)" stroke="{INK}" stroke-width="4" stroke-linejoin="round">
  <rect x="{neck_end-214}" y="252" width="214" height="38" rx="3" fill="#C7A26C"/>
  <g stroke="#8A6B3F" stroke-width="1.5">{frets}</g>
  <path d="M {neck_end} 250 h {head_end-neck_end-14} c 12 0 18 10 18 21 s -6 21 -18 21 h -{head_end-neck_end-14} z" fill="{body_fill}"/>
  <g fill="#C9CDD2" stroke="{INK}" stroke-width="2">{tuners}</g>
  <g transform="translate(335 292) scale(1.22) translate(-335 -292)">
    <path d="{BODY}" fill="{body_fill}"/>
    <g clip-path="url(#bodyclip)">
      <path d="{BODY}" fill="{burst}" stroke="none" transform="translate(335 292) scale(.74) translate(-335 -292)"/>
    </g>
    <path d="{BODY}" fill="none"/>
    <path d="{PICKGUARD}" fill="{pickguard}" stroke-width="3.5"/>
    <g stroke="#B9BEC5" stroke-width="1.4">
      <line x1="316" y1="262" x2="316" y2="342"/>
    </g>
  </g>
  {pickup_markup}
  <rect x="{bridge_x}" y="252" width="20" height="88" rx="4" fill="#C9CDD2" stroke-width="2.5"/>
  <g stroke="{INK}" stroke-width="1.6">
    <line x1="{bridge_x+3}" y1="266" x2="{bridge_x+17}" y2="266"/>
    <line x1="{bridge_x+3}" y1="280" x2="{bridge_x+17}" y2="280"/>
    <line x1="{bridge_x+3}" y1="294" x2="{bridge_x+17}" y2="294"/>
    <line x1="{bridge_x+3}" y1="308" x2="{bridge_x+17}" y2="308"/>
    <line x1="{bridge_x+3}" y1="322" x2="{bridge_x+17}" y2="322"/>
  </g>
  {knob_markup}
  <g stroke="#F0EDE6" stroke-width="1.2" opacity=".85">{string_lines}</g>
</g>
'''
    mk(name, body)

guitar_svg("guitar-strat.svg", "#7A3B22", "#B96B3E", "#F2EFE7", "#F2EFE7", 414, 646, 706, 6,
           [(336, 262), (360, 258), (384, 254)], [(306, 354), (330, 360)])
guitar_svg("bass-jazz.svg", "#5E2E1C", "#A65A35", "#E9E2D2", "#22262C", 410, 676, 736, 4,
           [(340, 268), (376, 264)], [(308, 356), (332, 362)])

# ---------------------------------------------------------------- drum kit
drums = f'''
<g stroke="{INK}" stroke-width="4" stroke-linejoin="round">
  <g stroke="#6B7280" stroke-width="8">
    <path d="M330 470v-96l118-36"/>
    <path d="M470 472v-120"/>
    <path d="M232 430l86-50"/>
    <path d="M560 430l-76-56"/>
  </g>
  <g stroke="#6B7280" stroke-width="6">
    <path d="M310 272v170"/>
    <path d="M520 256v196"/>
    <path d="M262 386v52"/>
  </g>
  <g stroke="{INK}" stroke-width="4">
    <ellipse cx="400" cy="330" rx="66" ry="30" fill="#2C323A"/>
    <ellipse cx="400" cy="324" rx="66" ry="30" fill="#3C434C"/>
    <ellipse cx="400" cy="322" rx="53" ry="23" fill="#4A525C" stroke="none"/>
    <ellipse cx="292" cy="356" rx="46" ry="22" fill="#2C323A"/>
    <ellipse cx="292" cy="350" rx="46" ry="22" fill="#3C434C"/>
    <ellipse cx="292" cy="348" rx="36" ry="16" fill="#4A525C" stroke="none"/>
    <ellipse cx="508" cy="356" rx="46" ry="22" fill="#2C323A"/>
    <ellipse cx="508" cy="350" rx="46" ry="22" fill="#3C434C"/>
    <ellipse cx="508" cy="348" rx="36" ry="16" fill="#4A525C" stroke="none"/>
    <ellipse cx="330" cy="398" rx="52" ry="24" fill="#2C323A"/>
    <ellipse cx="330" cy="392" rx="52" ry="24" fill="#3C434C"/>
    <ellipse cx="330" cy="390" rx="41" ry="18" fill="#4A525C" stroke="none"/>
    <ellipse cx="310" cy="272" rx="58" ry="17" fill="#C8A24A"/>
    <ellipse cx="310" cy="268" rx="58" ry="17" fill="#D9B45C"/>
    <ellipse cx="310" cy="267" rx="14" ry="5" fill="#8C6E2C" stroke="none"/>
    <ellipse cx="520" cy="256" rx="66" ry="19" fill="#C8A24A"/>
    <ellipse cx="520" cy="252" rx="66" ry="19" fill="#D9B45C"/>
    <ellipse cx="520" cy="251" rx="16" ry="5" fill="#8C6E2C" stroke="none"/>
    <ellipse cx="262" cy="386" rx="30" ry="12" fill="#C8A24A"/>
    <ellipse cx="262" cy="382" rx="30" ry="12" fill="#D9B45C"/>
    <rect x="556" y="318" width="58" height="42" rx="5" fill="#3C434C"/>
    <rect x="566" y="328" width="38" height="18" rx="2" fill="#7FA3B5" stroke-width="2"/>
  </g>
</g>
'''
mk("drums-td17.svg", drums)

# ---------------------------------------------------------------- alto sax
sax = f'''
<g stroke="{INK}" stroke-width="4" stroke-linejoin="round">
  <path d="M366 120c-10 32 6 62 30 86l-16 132c-8 62 26 112 88 112 44 0 78-30 84-72" fill="none" stroke="#2C323A" stroke-width="34" stroke-linecap="round"/>
  <path d="M366 120c-10 32 6 62 30 86l-16 132c-8 62 26 112 88 112 44 0 78-30 84-72" fill="none" stroke="#C39A4E" stroke-width="24" stroke-linecap="round"/>
  <path d="M366 120c-10 32 6 62 30 86l-16 132c-8 62 26 112 88 112 44 0 78-30 84-72" fill="none" stroke="#E0C078" stroke-width="6" stroke-linecap="round" opacity=".6"/>
  <path d="M366 120c-14 18-16 40-6 58l30-6c-8-18-6-38 6-52z" fill="#C39A4E"/>
  <path d="M356 100c8 8 20 12 32 10l6 18-38 8z" fill="#2C323A"/>
  <path d="M536 396c26 0 48-18 54-42l-18-10c-6 18-20 30-40 30z" fill="#C39A4E"/>
  <ellipse cx="536" cy="418" rx="54" ry="24" transform="rotate(-18 536 418)" fill="#C39A4E"/>
  <ellipse cx="532" cy="412" rx="38" ry="14" transform="rotate(-18 532 412)" fill="#7A5A20" stroke="none"/>
</g>
<g stroke="{INK}" stroke-width="2.5" fill="#E0C078">
  <circle cx="410" cy="238" r="13"/><circle cx="406" cy="278" r="13"/><circle cx="402" cy="318" r="13"/>
  <circle cx="400" cy="358" r="13"/><circle cx="404" cy="398" r="13"/><circle cx="420" cy="436" r="13"/>
  <circle cx="450" cy="462" r="13"/><circle cx="486" cy="472" r="13"/>
  <circle cx="446" cy="212" r="10"/><circle cx="452" cy="176" r="10"/>
</g>
<g stroke="#8C6E2C" stroke-width="3" fill="none">
  <path d="M418 226v26"/><path d="M414 266v26"/><path d="M410 306v26"/>
  <path d="M408 346v26"/><path d="M412 386v26"/>
</g>
'''
mk("wind-sax.svg", sax)

# ---------------------------------------------------------------- violin
violin = f'''
<g transform="rotate(-12 400 300)" stroke="{INK}" stroke-width="4" stroke-linejoin="round">
  <path d="M330 190c-30 4-46 28-40 52 4 18 18 28 18 38s-14 20-18 38c-6 24 10 48 40 52 22 4 42-6 54-22 12 16 32 26 54 22 30-4 46-28 40-52-4-18-18-28-18-38s14-20 18-38c6-24-10-48-40-52-22-4-42 6-54 22-12-16-32-26-54-22z" fill="#B2763C"/>
  <path d="M330 190c-30 4-46 28-40 52 4 18 18 28 18 38s-14 20-18 38c-6 24 10 48 40 52 22 4 42-6 54-22 12 16 32 26 54 22 30-4 46-28 40-52-4-18-18-28-18-38s14-20 18-38c6-24-10-48-40-52-22-4-42 6-54 22-12-16-32-26-54-22z" fill="none"/>
  <path d="M388 190c-6 10-6 22 0 32s6 22 0 32-6 22 0 32 6 22 0 32-6 22 0 32 6 22 0 32" fill="none" stroke="#7E5124" stroke-width="3"/>
  <path d="M336 218c-10 12-4 26 6 34-10 12-12 28-2 40M446 218c10 12 4 26-6 34 10 12 12 28 2 40" fill="none" stroke="#4A2E13" stroke-width="3"/>
  <path d="M344 236c6 6 6 14 0 20M438 236c-6 6-6 14 0 20" fill="none" stroke="#4A2E13" stroke-width="3"/>
  <rect x="420" y="120" width="30" height="140" rx="6" fill="#6B4423" stroke="none"/>
  <path d="M420 120h30v-28c0-12-8-20-15-26-7 6-15 14-15 26z" fill="#6B4423"/>
  <circle cx="435" cy="70" r="12" fill="#6B4423"/>
  <rect x="416" y="256" width="38" height="8" rx="3" fill="#2C323A"/>
  <g stroke="#D8D3C8" stroke-width="1.6">
    <line x1="424" y1="132" x2="424" y2="360"/><line x1="432" y1="128" x2="432" y2="364"/>
    <line x1="440" y1="128" x2="440" y2="364"/><line x1="448" y1="132" x2="448" y2="360"/>
  </g>
  <path d="M414 344c-14 6-18 22-12 34 8 4 20 0 28-8z" fill="#2C323A"/>
</g>
<path d="M206 452L600 132" stroke="{INK}" stroke-width="7" stroke-linecap="round"/>
<path d="M206 452L600 132" stroke="#8A5C2E" stroke-width="4" stroke-linecap="round"/>
<path d="M206 452l-14 10M594 138l10-14" stroke="#2C323A" stroke-width="9" stroke-linecap="round"/>
'''
mk("strings-violin.svg", violin)

# ---------------------------------------------------------------- bigsky pedal
bigsky = f'''
<g stroke="{INK}" stroke-width="4" stroke-linejoin="round">
  <path d="M286 146l228-16 22 302-228 20z" fill="#22314A"/>
  <path d="M286 146l228-16 8 26-226 18z" fill="#2C3E5C" stroke="none"/>
  <g stroke="{INK}" stroke-width="2.5">
    <circle cx="336" cy="204" r="17" fill="#0F1724"/><line x1="336" y1="204" x2="336" y2="190" stroke="{CREAM}" stroke-width="3"/>
    <circle cx="392" cy="200" r="17" fill="#0F1724"/><line x1="392" y1="200" x2="392" y2="186" stroke="{CREAM}" stroke-width="3"/>
    <circle cx="448" cy="196" r="17" fill="#0F1724"/><line x1="448" y1="196" x2="448" y2="182" stroke="{CREAM}" stroke-width="3"/>
    <circle cx="336" cy="256" r="17" fill="#0F1724"/><line x1="336" y1="256" x2="348" y2="248" stroke="{CREAM}" stroke-width="3"/>
    <circle cx="392" cy="252" r="17" fill="#0F1724"/><line x1="392" y1="252" x2="392" y2="238" stroke="{CREAM}" stroke-width="3"/>
    <circle cx="448" cy="248" r="17" fill="#0F1724"/><line x1="448" y1="248" x2="436" y2="240" stroke="{CREAM}" stroke-width="3"/>
  </g>
  <rect x="310" y="292" width="168" height="52" rx="4" fill="#0F1724" stroke-width="3"/>
  <path d="M326 334l18-26 14 18 20-30 16 22 20-18 14 14" fill="none" stroke="#7FB0C6" stroke-width="3"/>
  <g stroke="{INK}" stroke-width="3">
    <circle cx="340" cy="384" r="14" fill="#B9BEC5"/><circle cx="340" cy="384" r="6" fill="#6B7280" stroke="none"/>
    <circle cx="470" cy="378" r="14" fill="#B9BEC5"/><circle cx="470" cy="378" r="6" fill="#6B7280" stroke="none"/>
  </g>
  <g stroke="{INK}" stroke-width="3">
    <rect x="318" y="418" width="52" height="20" rx="3" fill="#B9BEC5"/>
    <rect x="424" y="412" width="52" height="20" rx="3" fill="#B9BEC5"/>
  </g>
  <circle cx="452" cy="226" r="4" fill="#E0603C" stroke="none"/>
</g>
'''
mk("pedal-bigsky.svg", bigsky)

# ---------------------------------------------------------------- studio desk
desk = f'''
<g stroke="{INK}" stroke-width="4" stroke-linejoin="round">
  <path d="M154 304l36-18h444l18 18z" fill="#B78A5B"/>
  <rect x="154" y="304" width="498" height="24" rx="3" fill="#A5794E"/>
  <rect x="154" y="328" width="498" height="10" fill="#8A6438" stroke-width="2"/>
  <rect x="176" y="338" width="18" height="172" fill="#2F353D"/>
  <rect x="612" y="338" width="18" height="172" fill="#2F353D"/>
  <rect x="176" y="430" width="454" height="18" fill="#3A4149" stroke-width="3"/>
  <rect x="470" y="356" width="128" height="74" rx="4" fill="#3A4149"/>
  <g stroke="#6B7280" stroke-width="2">
    <line x1="482" y1="370" x2="586" y2="370"/><line x1="482" y1="384" x2="586" y2="384"/>
    <line x1="482" y1="398" x2="586" y2="398"/><line x1="482" y1="412" x2="586" y2="412"/>
  </g>
  <rect x="196" y="352" width="110" height="96" rx="3" fill="#4A515A"/>
  <g stroke="#7B828B" stroke-width="2">
    <line x1="206" y1="366" x2="296" y2="366"/><line x1="206" y1="380" x2="296" y2="380"/>
    <line x1="206" y1="394" x2="296" y2="394"/>
  </g>
  <rect x="318" y="368" width="126" height="76" rx="4" fill="#3A4149"/>
  <path d="M332 384h98M332 398h98M332 412h98" stroke="#6B7280" stroke-width="2"/>
  <circle cx="470" cy="378" r="18" fill="#2F353D"/>
  <circle cx="470" cy="378" r="11" fill="#454D56"/>
</g>
<g stroke="{INK}" stroke-width="3">
  <rect x="306" y="196" width="94" height="76" rx="3" fill="#2C323A"/>
  <rect x="316" y="206" width="74" height="54" fill="#3E5A6B" stroke="none"/>
  <path d="M330 246l10-10 8 8 12-14 10 10" fill="none" stroke="#9CC6D8" stroke-width="2"/>
  <rect x="342" y="272" width="22" height="18" fill="#3A4149"/>
  <rect x="318" y="272" width="70" height="8" rx="2" fill="#3A4149"/>
</g>
'''
mk("furniture-desk.svg", desk)

# ---------------------------------------------------------------- xlr cables
cables = f'''
<g fill="none" stroke-linecap="round">
  <g stroke="{INK}" stroke-width="18">
    <ellipse cx="352" cy="330" rx="112" ry="92"/>
    <ellipse cx="352" cy="330" rx="72" ry="56"/>
    <ellipse cx="500" cy="352" rx="96" ry="80"/>
    <ellipse cx="500" cy="352" rx="58" ry="46"/>
  </g>
  <g stroke="#2F343B" stroke-width="12">
    <ellipse cx="352" cy="330" rx="112" ry="92"/>
    <ellipse cx="352" cy="330" rx="72" ry="56"/>
    <ellipse cx="500" cy="352" rx="96" ry="80"/>
    <ellipse cx="500" cy="352" rx="58" ry="46"/>
  </g>
  <path d="M240 330c-32 0-52 14-52 36" stroke="{INK}" stroke-width="14"/>
  <path d="M240 330c-32 0-52 14-52 36" stroke="#2F343B" stroke-width="10"/>
  <path d="M560 388c26 8 42 22 42 42" stroke="{INK}" stroke-width="14"/>
  <path d="M560 388c26 8 42 22 42 42" stroke="#2F343B" stroke-width="10"/>
</g>
<g stroke="{INK}" stroke-width="4" stroke-linejoin="round">
  <rect x="146" y="366" width="58" height="34" rx="6" fill="#B9BEC5" transform="rotate(-18 146 366)"/>
  <rect x="130" y="382" width="22" height="16" rx="4" fill="#8C929A" transform="rotate(-18 130 382)"/>
  <rect x="560" y="414" width="58" height="34" rx="6" fill="#B9BEC5" transform="rotate(28 560 414)"/>
  <rect x="594" y="436" width="22" height="16" rx="4" fill="#8C929A" transform="rotate(28 594 436)"/>
  <rect x="286" y="436" width="58" height="34" rx="6" fill="#B9BEC5" transform="rotate(8 286 436)"/>
  <rect x="270" y="454" width="22" height="16" rx="4" fill="#8C929A" transform="rotate(8 270 454)"/>
</g>
<g fill="#2C323A">
  <circle cx="160" cy="388" r="3"/><circle cx="172" cy="384" r="3"/><circle cx="184" cy="380" r="3"/>
</g>
'''
mk("cable-xlr.svg", cables)

# ---------------------------------------------------------------- rack case
rack = f'''
<g stroke="{INK}" stroke-width="4" stroke-linejoin="round">
  <rect x="242" y="112" width="316" height="376" rx="10" fill="#252A31"/>
  <rect x="252" y="122" width="296" height="356" rx="6" fill="#31373F" stroke-width="3"/>
  <rect x="242" y="112" width="316" height="18" rx="9" fill="#8F969E" stroke-width="3"/>
  <rect x="242" y="470" width="316" height="18" rx="9" fill="#8F969E" stroke-width="3"/>
  <rect x="242" y="112" width="18" height="376" fill="#8F969E" stroke-width="3"/>
  <rect x="540" y="112" width="18" height="376" fill="#8F969E" stroke-width="3"/>
  <rect x="272" y="144" width="236" height="312" rx="3" fill="#1E232A" stroke-width="2"/>
  <g stroke="#5B626B" stroke-width="2">
    <line x1="272" y1="183" x2="508" y2="183"/><line x1="272" y1="222" x2="508" y2="222"/>
    <line x1="272" y1="261" x2="508" y2="261"/><line x1="272" y1="300" x2="508" y2="300"/>
    <line x1="272" y1="339" x2="508" y2="339"/><line x1="272" y1="378" x2="508" y2="378"/>
    <line x1="272" y1="417" x2="508" y2="417"/>
  </g>
  <g fill="#7B828B" stroke="none">
    <circle cx="282" cy="163" r="3"/><circle cx="498" cy="163" r="3"/>
    <circle cx="282" cy="202" r="3"/><circle cx="498" cy="202" r="3"/>
    <circle cx="282" cy="241" r="3"/><circle cx="498" cy="241" r="3"/>
    <circle cx="282" cy="280" r="3"/><circle cx="498" cy="280" r="3"/>
    <circle cx="282" cy="319" r="3"/><circle cx="498" cy="319" r="3"/>
    <circle cx="282" cy="358" r="3"/><circle cx="498" cy="358" r="3"/>
    <circle cx="282" cy="397" r="3"/><circle cx="498" cy="397" r="3"/>
    <circle cx="282" cy="436" r="3"/><circle cx="498" cy="436" r="3"/>
  </g>
  <rect x="340" y="424" width="120" height="26" rx="4" fill="#B9BEC5" stroke-width="3"/>
  <path d="M356 437h88" stroke="#5B626B" stroke-width="4"/>
  <g fill="#B9BEC5" stroke-width="3">
    <rect x="318" y="196" width="24" height="34" rx="4"/>
    <rect x="458" y="196" width="24" height="34" rx="4"/>
    <rect x="318" y="352" width="24" height="34" rx="4"/>
    <rect x="458" y="352" width="24" height="34" rx="4"/>
  </g>
</g>
'''
mk("etc-rackcase.svg", rack)

print("generated", len(os.listdir(OUT)), "files")
