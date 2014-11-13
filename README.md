# genderSwap ![](https://raw.githubusercontent.com/javl/genderSwap/master/icons/icon_48.png "")

GenderSwap is a browser plugin which replaces words referencing to men with their female equivalent, and vice versa.

Simply substituting one gender for another changes many news posts and articles into oddly distorted texts. For instance, we are not surprised when we read about women being harassed while walking down the street, but swap genders and things start sounding strange and stop 'making sense': "Whenever I bring up the topic of street harassment with women, they tell me they just don’t see it. Literally: When they’re walking down the street with a man, other women don’t make a noise." [[Amanda Hess, Slate.com, Oct 28 2014](http://www.slate.com/blogs/xx_factor/2014/10/28/street_harassment_video_a_hidden_camera_records_what_women_go_through_on.html)]

genderSwap helps to see situations we consider normal from another angle.

##Downloads
Use the following link to download the plugin:

  * For [Chrome / Chromium](https://github.com/javl/genderSwap/blob/master/chrome/genderSwap.crx?raw=true)
  * For [Firefox / Iceweasel](https://github.com/javl/genderSwap/blob/master/firefox/genderSwap.xpi?raw=true)
  * For [Opera](https://github.com/javl/genderSwap/blob/master/opera/genderSwap.oex?raw=true)

##About
This plugin is an updated version of a plugin I made while attending the Piet Zwart Institute. More of my work can be found on my website: [jaspervanloenen.com](http://jaspervanloenen.com).

##Attribution:
The code in this version is based on the Cloud-to-Butt plugin by [Steven Frank](https://github.com/panicsteve), available [here](https://github.com/panicsteve/cloud-to-butt).

The Safari, Firefox and Opera versions are based on the Cloud-to-Butt ports by [Logan Collins](https://github.com/logancollins) ([Safari version](https://github.com/logancollins/cloud-to-butt-safari)) and [Chris Wright](https://github.com/DaveRandom) ([Firefox version](https://github.com/DaveRandom/cloud-to-butt-mozilla) / [Opera version](https://github.com/DaveRandom/cloud-to-butt-opera)).

## Note about Safari version
It seems Apple tries to make it hard for non OSX developers to build extentions for Safari, so I didn't bother. Feel free to compile the code found in the Safari folder of this repository into a working plugin (please, send me a pull request if you do!).

###Function
This plugin replaces certain keywords in the source of websites you visit. While this replacement is far from perfect, it works quite well most of the time.

To be able to perform its search-and-replace magic the plugin needs access to the pages you visit: this is only for the replacement! No data whatsoever is recorded or transmitted in any way.
