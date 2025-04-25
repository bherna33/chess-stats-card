<div align="center">
    <h1>Chess Stats Card</h1>
    Display your chess.com rating on your GitHub profile README.
</div>

## ⚡ Quick setup

1. Star this repo 😁
2. Place the code below in you repo and replace username with your own.
```
![Chess stats card](https://chess-stats-card.vercel.app/api/card?user=username)
```

It is recommended to self-host the project for better reliability. 

## 🃏 Available Cards

Here are the different types of cards you can generate:

| Card Name   | Endpoint    | Description                         | Card |
|------------ |-------------|-------------------------------------| ---- |
| `Card`      | `/api/card` | General profile stats card          | ![Card](./docs/cards/default.svg) |
| `Game Card` | `/api/game` | Shows stats for a specific game mode (requires [gameMode](#-additional-options-for-game-card)) | ![Game Card](./docs/game/game.svg) |


<!-- See Deploying it on your own for more details. -->

## 🔧 Options

> ⚠️ **Important**: Make sure to include the ? before your first parameter, or your options won’t be applied.

Example: `https://chess-stats-card.vercel.app/api/card?user=username`

The `user` field is the only required option for all cards. All other fields are optional. To add additional field add `&[parameter]` to the link.

| Parameter     | Type      | Description                                                              | Example             |
| :-----------: | :-------: | :----------------------------------------------------------------------- | :-----------------: |
| `user`        | `string`  | Your Chess.com username                                                  | magnuscarlsen       |
| `theme`       | `string`  | Card theme – available themes: light, dark, midnight, [etc...](#-themes) | theme=ocean_dark    |
| `width`       | `float`   | Width of the card                                                        | width=420           |
| `height`      | `float`   | Height of the card                                                       | height=200          |
| `avatar`      | `boolean` | Toggle profile picture from Chess.com. `true` by default                 | avatar=false        |
| `textColor`   | `string`  | HEX or named color for body text                                         | textColor=#ffffff   |
| `titleColor`  | `string`  | HEX or named color for the title                                         | titleColor=#00ff00  |
| `borderColor` | `string`  | HEX or named color for the border                                        | borderColor=#000000 |
| `bgColor`     | `string`  | HEX or named color for the card background                               | bgColor=#1a1a1a     |


> **Note**: If you provide `textColor`, `titleColor`, `borderColor`, or `bgColor`, they will override the colors set by the selected `theme`.

### 🎮 Additional Options for `Game Card`

| Parameter     | Type     | Description                                                | Example                |
| :-----------: | :------: | :--------------------------------------------------------- | :--------------------: |
| `gameMode`    | `string` | Game mode to show stats for (**required for `gamecard`**) | gameMode=chess_blitz  |

> Valid `gameMode` values: `chess_rapid`, `chess_blitz`, `chess_bullet`, `chess960_daily` and `chess_daily`.


## 🎨 Themes

All cards themes are set to `default` by default. Here are a few themes that you can do. 

<details>
<summary> All themes </summary>

| | |
| :---: | :---: | 
| `default` ![default](./docs/cards/default.svg) | `transparent` ![transparent](./docs/cards/transparent.svg) |
| `shadow_red` ![shadow_red](./docs/cards/shadow_red.svg) | `shadow_green` ![shadow_green](./docs/cards/shadow_green.svg) |
| `shadow_blue` ![shadow_blue](./docs/cards/shadow_blue.svg) | `dark` ![dark](./docs/cards/dark.svg) |
| `radical` ![radical](./docs/cards/radical.svg) | `merko` ![merko](./docs/cards/merko.svg) |
| `gruvbox` ![gruvbox](./docs/cards/gruvbox.svg) | `gruvbox_light` ![gruvbox_light](./docs/cards/gruvbox_light.svg) |
| `tokyonight` ![tokyonight](./docs/cards/tokyonight.svg) | `onedark` ![onedark](./docs/cards/onedark.svg) |
| `cobalt` ![cobalt](./docs/cards/cobalt.svg) | `synthwave` ![synthwave](./docs/cards/synthwave.svg) |
| `high_contrast` ![high_contrast](./docs/cards/high_contrast.svg) | `dracula` ![dracula](./docs/cards/dracula.svg) |
| `prussian` ![prussian](./docs/cards/prussian.svg) | `monokai` ![monokai](./docs/cards/monokai.svg) |
| `vue` ![vue](./docs/cards/vue.svg) | `vue_dark` ![vue_dark](./docs/cards/vue_dark.svg) |
| `shades_of_purple` ![shades_of_purple](./docs/cards/shades_of_purple.svg) | `nightowl` ![nightowl](./docs/cards/nightowl.svg) |
| `buefy` ![buefy](./docs/cards/buefy.svg) | `blue_green` ![blue_green](./docs/cards/blue_green.svg) |
| `algolia` ![algolia](./docs/cards/algolia.svg) | `great_gatsby` ![great_gatsby](./docs/cards/great_gatsby.svg) |
| `darcula` ![darcula](./docs/cards/darcula.svg) | `bear` ![bear](./docs/cards/bear.svg) |
| `solarized_dark` ![solarized_dark](./docs/cards/solarized_dark.svg) | `solarized_light` ![solarized_light](./docs/cards/solarized_light.svg) |
| `chartreuse_dark` ![chartreuse_dark](./docs/cards/chartreuse_dark.svg) | `nord` ![nord](./docs/cards/nord.svg) |
| `gotham` ![gotham](./docs/cards/gotham.svg) | `material_palenight` ![material_palenight](./docs/cards/material_palenight.svg) |
| `graywhite` ![graywhite](./docs/cards/graywhite.svg) | `vision_friendly_dark` ![vision_friendly_dark](./docs/cards/vision_friendly_dark.svg) |
| `ayu_mirage` ![ayu_mirage](./docs/cards/ayu_mirage.svg) | `midnight_purple` ![midnight_purple](./docs/cards/midnight_purple.svg) |
| `calm` ![calm](./docs/cards/calm.svg) | `flag_india` ![flag_india](./docs/cards/flag_india.svg) |
| `omni` ![omni](./docs/cards/omni.svg) | `react` ![react](./docs/cards/react.svg) |
| `jolly` ![jolly](./docs/cards/jolly.svg) | `maroongold` ![maroongold](./docs/cards/maroongold.svg) |
| `yeblu` ![yeblu](./docs/cards/yeblu.svg) | `blueberry` ![blueberry](./docs/cards/blueberry.svg) |
| `slateorange` ![slateorange](./docs/cards/slateorange.svg) | `kacho_ga` ![kacho_ga](./docs/cards/kacho_ga.svg) |
| `outrun` ![outrun](./docs/cards/outrun.svg) | `ocean_dark` ![ocean_dark](./docs/cards/ocean_dark.svg) |
| `city_lights` ![city_lights](./docs/cards/city_lights.svg) | `github_dark` ![github_dark](./docs/cards/github_dark.svg) |
| `github_dark_dimmed` ![github_dark_dimmed](./docs/cards/github_dark_dimmed.svg) | `discord_old_blurple` ![discord_old_blurple](./docs/cards/discord_old_blurple.svg) |
| `aura_dark` ![aura_dark](./docs/cards/aura_dark.svg) | `panda` ![panda](./docs/cards/panda.svg) |
| `noctis_minimus` ![noctis_minimus](./docs/cards/noctis_minimus.svg) | `cobalt2` ![cobalt2](./docs/cards/cobalt2.svg) |
| `swift` ![swift](./docs/cards/swift.svg) | `aura` ![aura](./docs/cards/aura.svg) |
| `apprentice` ![apprentice](./docs/cards/apprentice.svg) | `moltack` ![moltack](./docs/cards/moltack.svg) |
| `codeSTACKr` ![codeSTACKr](./docs/cards/codeSTACKr.svg) | `rose_pine` ![rose_pine](./docs/cards/rose_pine.svg) |
| `catppuccin_latte` ![catppuccin_latte](./docs/cards/catppuccin_latte.svg) | `catppuccin_mocha` ![catppuccin_mocha](./docs/cards/catppuccin_mocha.svg) |
| `date_night` ![date_night](./docs/cards/date_night.svg) | `one_dark_pro` ![one_dark_pro](./docs/cards/one_dark_pro.svg) |
| `rose` ![rose](./docs/cards/rose.svg) | `holi` ![holi](./docs/cards/holi.svg) |
| `neon` ![neon](./docs/cards/neon.svg) | `blue_navy` ![blue_navy](./docs/cards/blue_navy.svg) |
| `calm_pink` ![calm_pink](./docs/cards/calm_pink.svg) | `halloween` ![halloween](./docs/cards/halloween.svg) |
| `blood` ![blood](./docs/cards/blood.svg) | `youtube_dark` ![youtube_dark](./docs/cards/youtube_dark.svg) |
| `dawnfox` ![dawnfox](./docs/cards/dawnfox.svg) | `javascript_dark` ![javascript_dark](./docs/cards/javascript_dark.svg) |
| `nightfox` ![nightfox](./docs/cards/nightfox.svg) | `earth` ![earth](./docs/cards/earth.svg) |
| `soft_green` ![soft_green](./docs/cards/soft_green.svg) | `leafy` ![leafy](./docs/cards/leafy.svg) |
| `submarine_flowers` ![submarine_flowers](./docs/cards/submarine_flowers.svg) | `onedark_duo` ![onedark_duo](./docs/cards/onedark_duo.svg) |
| `monokai_metallian` ![monokai_metallian](./docs/cards/monokai_metallian.svg) | `tokyonight_duo` ![tokyonight_duo](./docs/cards/tokyonight_duo.svg) |
| `whatsapp_light` ![whatsapp_light](./docs/cards/whatsapp_light.svg) | `catppuccin_macchiato` ![catppuccin_macchiato](./docs/cards/catppuccin_macchiato.svg) |
| `black_ice` ![black_ice](./docs/cards/black_ice.svg) | `rust_ferris_dark` ![rust_ferris_dark](./docs/cards/rust_ferris_dark.svg) |
| `microsoft` ![microsoft](./docs/cards/microsoft.svg) | `codestackr` ![codestackr](./docs/cards/codestackr.svg) |
| `microsoft_dark` ![microsoft_dark](./docs/cards/microsoft_dark.svg) | `taiga` ![taiga](./docs/cards/taiga.svg) |
| `dayfox` ![dayfox](./docs/cards/dayfox.svg) | `violet_punch` ![violet_punch](./docs/cards/violet_punch.svg) |
| `highcontrast` ![highcontrast](./docs/cards/highcontrast.svg) | `modern_lilac` ![modern_lilac](./docs/cards/modern_lilac.svg) |
| `modern_lilac2` ![modern_lilac2](./docs/cards/modern_lilac2.svg) | `burnt_neon` ![burnt_neon](./docs/cards/burnt_neon.svg) |
| `sea` ![sea](./docs/cards/sea.svg) | `hacker_inverted` ![hacker_inverted](./docs/cards/hacker_inverted.svg) |
| `neon_blurange` ![neon_blurange](./docs/cards/neon_blurange.svg) | `elegant` ![elegant](./docs/cards/elegant.svg) |
| `shadow_orange` ![shadow_orange](./docs/cards/shadow_orange.svg) | `holi_theme` ![holi_theme](./docs/cards/holi_theme.svg) |
| `blux` ![blux](./docs/cards/blux.svg) | `meta_light` ![meta_light](./docs/cards/meta_light.svg) |
| `windows_dark` ![windows_dark](./docs/cards/windows_dark.svg) | `hacker` ![hacker](./docs/cards/hacker.svg) |
| `green_nur` ![green_nur](./docs/cards/green_nur.svg) | `rising_sun` ![rising_sun](./docs/cards/rising_sun.svg) |
| `material` ![material](./docs/cards/material.svg) | `shadow_brown` ![shadow_brown](./docs/cards/shadow_brown.svg) |
| `git_dark` ![git_dark](./docs/cards/git_dark.svg) | `github_light` ![github_light](./docs/cards/github_light.svg) |
| `gruvbox_duo` ![gruvbox_duo](./docs/cards/gruvbox_duo.svg) | `nordfox` ![nordfox](./docs/cards/nordfox.svg) |
| `buefy_dark` ![buefy_dark](./docs/cards/buefy_dark.svg) | `blueberry_duo` ![blueberry_duo](./docs/cards/blueberry_duo.svg) |
| `humoris` ![humoris](./docs/cards/humoris.svg) | `horizon` ![horizon](./docs/cards/horizon.svg) |
| `whatsapp_light2` ![whatsapp_light2](./docs/cards/whatsapp_light2.svg) | `neon_dark` ![neon_dark](./docs/cards/neon_dark.svg) |
| `rust_ferris_light` ![rust_ferris_light](./docs/cards/rust_ferris_light.svg) | `iceberg` ![iceberg](./docs/cards/iceberg.svg) |
| `telegram` ![telegram](./docs/cards/telegram.svg) | `icegray` ![icegray](./docs/cards/icegray.svg) |
| `navy_gear` ![navy_gear](./docs/cards/navy_gear.svg) | `deepblue` ![deepblue](./docs/cards/deepblue.svg) |
| `duskfox` ![duskfox](./docs/cards/duskfox.svg) | `java_dark` ![java_dark](./docs/cards/java_dark.svg) |
| `github_green_purple` ![github_green_purple](./docs/cards/github_green_purple.svg) | `github_dark_blue` ![github_dark_blue](./docs/cards/github_dark_blue.svg) |
| `terafox` ![terafox](./docs/cards/terafox.svg) | `python_dark` ![python_dark](./docs/cards/python_dark.svg) |
| `dark_smoky` ![dark_smoky](./docs/cards/dark_smoky.svg) | `deuteranopia_friend` ![deuteranopia_friend](./docs/cards/deuteranopia_friend.svg) |
| `blood_dark` ![blood_dark](./docs/cards/blood_dark.svg) | `android_dark` ![android_dark](./docs/cards/android_dark.svg) |
| `carbonfox` ![carbonfox](./docs/cards/carbonfox.svg) | `catppuccin_frappe` ![catppuccin_frappe](./docs/cards/catppuccin_frappe.svg) |
| `whatsapp_dark2` ![whatsapp_dark2](./docs/cards/whatsapp_dark2.svg) | `meta_dark` ![meta_dark](./docs/cards/meta_dark.svg) |
| `violet_dark` ![violet_dark](./docs/cards/violet_dark.svg) | `sea_dark` ![sea_dark](./docs/cards/sea_dark.svg) |
| `dark_minimalist` ![dark_minimalist](./docs/cards/dark_minimalist.svg) | `travelers_theme` ![travelers_theme](./docs/cards/travelers_theme.svg) |

</details>
