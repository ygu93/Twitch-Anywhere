# Twitch Anywhere

## Background
Twitch Anywhere is a google chrome extension for twitch.tv. It allows users to access their twitch account from any webpage. Also allows users to view certain parts of Twitch's page as well.

## Functionality & MVP
With this chrome extension, users will be able to:
- Access their followed streamers so if any of them are live
- Access the Twitch games page to see which games have the most viewers currently
- Access Twitch's top streams page to see who the top streamers(most current viewers)
- Click on a stream and have it open the stream in a new window/current tab(TBD which one or both)

## Wireframes
The extension will be something a user can click on their browser and open a screen. The menu will show a bunch of tabs and the information for each tab.

![wireframes] (https://github.com/ygu93/ztype/blob/master/Wireframe/twitch-wireframe.png)

## Architecture and technologies
 - This extension will use Twitch's API for all its backend calls.
 - React and most likely Redux for its frontend rendering

 How I envision it to be will be much like a tabs widget. Each click on a tab will send a request to Twitch's API to grab the necessary info for that page via an AJAX request. The information will get parsed and sent to a details component for that particular tab. eg: FollowedStreamDetails and DetailsItem. There will be a default tab set so some detail will always be rendered.


## Implementation Timeline
Day 1: Learn Twitch API

Read up on Twitch's API to get all the necessary calls I need, make sure my AJAX requests can be sent and data is given back. This includes AJAX requests for signing in and being able to pass user credentials and auth tokens to Twitch.

Day 2: Build Layout for overall extension

At this point I'd like to be able to click an icon and have some rectangular box show up on my browser with some icons for tabs, no functionality to the tabs yet.

Day 3: Auth

Users can sign in to their twitch account via the extension menu

Day 4: Games

Users can make a GET request to twitchs api /games/top and see the top games on twitch, Users can click into the game to see the top streams for that game. Also can click on a stream to go to the twitch stream.

Day 5: Top streams

Similar to games but a top streams detail.

Day 6: Followed Streamers

Logged in users can see which streamers are live out of the ones they are currently following. As with the others, also has click functionality to open a window.

### Bonus features
 - Settings menu to configure default tab, how to open a new stream(new tab/new window/popout)
 - More tabs, Twitch's api is capable of a lot of things I could also add in the future, a followed games tab, subscriptions tab,etc
 - Search, allows users to filter the results of any tab. If on the games page and I'm looking for "Hearthstone", I can type in hearthstone into the searchbar the games will filter to only the hearthstone one.
