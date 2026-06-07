# Slack ASCII Bot
A Slack bot that allows users to create ASCII images and text with short commands

## Draw Command
Users can use ASCII bot to create ASCII images through the use of the ```/ascii-draw [subject]``` command where the required parameter ```[subject]``` refers to the subject matter that is to be depicted in the image. The bot is currently limited to the following subjects:
 - Shrek
 - Garfield
 - Bluey
 - Pikachu</br>
 
For example, given the command ```/ascii-draw shrek``` ASCII bot will reply with the following:
```
⢀⡴⠑⡄⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
⠸⡇⠀⠿⡀⠀⠀⠀⣀⡴⢿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠑⢄⣠⠾⠁⣀⣄⡈⠙⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⡀⠁⠀⠀⠈⠙⠛⠂⠈⣿⣿⣿⣿⣿⠿⡿⢿⣆⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢀⡾⣁⣀⠀⠴⠂⠙⣗⡀⠀⢻⣿⣿⠭⢤⣴⣦⣤⣹⠀⠀⠀⢀⢴⣶⣆
⠀⠀⢀⣾⣿⣿⣿⣷⣮⣽⣾⣿⣥⣴⣿⣿⡿⢂⠔⢚⡿⢿⣿⣦⣴⣾⠁⠸⣼⡿
⠀⢀⡞⠁⠙⠻⠿⠟⠉⠀⠛⢹⣿⣿⣿⣿⣿⣌⢤⣼⣿⣾⣿⡟⠉⠀⠀⠀⠀⠀
⠀⣾⣷⣶⠇⠀⠀⣤⣄⣀⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀
⠀⠉⠈⠉⠀⠀⢦⡈⢻⣿⣿⣿⣶⣶⣶⣶⣤⣽⡹⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠉⠲⣽⡻⢿⣿⣿⣿⣿⣿⣿⣷⣜⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣷⣶⣮⣭⣽⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠻⠿⠿⠿⠿⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀

```

## Text Command
Users can also use ASCII bot to create ASCII text in various fonts through the use of the ```/ascii-text [text] [font?]``` command where the required parameter ```[text]``` refers to the text that is to be written in ASCII format while the optional parameter ```[font?]``` refers to the font the user would like</br>
to apply to the ASCII text. If the optional parameter is omitted, the bot will use the standard font. Currently, the bot will not correctly indentify inputs with spaces or other whitespace for either parameter. 
```...               ..                             ..                    ...     ..                       s    
   .x888888hx    : x .d88"                        < .z@8"`                 .=*8888x <"?88h.                   :8    
  d88888888888hxx   5888R                          !@88E                  X>  '8888H> '8888          u.      .88    
 8" ... `"*8888%`   '888R         u           .    '888E   u             '88h. `8888   8888    ...ue888b    :888ooo 
!  "   ` .xnxx.      888R      us888u.   .udR88N    888E u@8NL           '8888 '8888    "88>   888R Y888r -*8888888 
X X   .H8888888%:    888R   .@88 "8888" <888'888k   888E`"88*"            `888 '8888.xH888x.   888R I888>   8888    
X 'hn8888888*"   >   888R   9888  9888  9888 'Y"    888E .dN.               X" :88*~  `*8888>  888R I888>   8888    
X: `*88888%`     !   888R   9888  9888  9888        888E~8888             ~"   !"`      "888>  888R I888>   8888    
'8h.. ``     ..x8>   888R   9888  9888  9888        888E '888&  88888888   .H8888h.      ?88  u8888cJ888   .8888Lu= 
 `88888888888888f   .888B . 9888  9888  ?8888u../   888E  9888. 88888888  :"^"88888h.    '!    "*888*P"    ^%888*   
  '%8888888888*"    ^*888%  "888*""888"  "8888P'  '"888*" 4888"           ^    "88888hx.+"       'Y"         'Y"    
     ^"****""`        "%     ^Y"   ^Y'     "P'       ""    ""                    ^"**""
```
