# Facebook 

## Controllers
 * Serve static pages for every route
 * Use JBuilder to template JSON for the Backbone front-end
 * Prefetches associated data with `includes`, etc.

## Models
 * User
 * Post
 * Photo
 * FriendRequest
 * Friendship
 * Tag (Polymorphic)
 * Like (Polymorphic)
 * Notification (Polymorphic)
 * Comment (Polymorphic)

## Views
 * Partials for every static page element
 * Currently building those partials into the Backbone front-end


## Itinerary

### Backbone
  * Finish users router for page navigation
  * Fix the photos page controller in production mode

### Rails

#### Application
  * Add privacy settings
#### Presentation
##### Splash
  * reformat signup page, float right on page
  * find something to put n left side
##### Navbar
  * add Friends button
  * add icons to home, profile, settings, button etc
  * add logout button
  * make a photo logo to replace the text button (?)
  * add a search bar with magnifying glass
##### Profile
  * allow editing profile attributes on the page
  * make about box editable on click
##### Friends
  * add partial to show small icons of top six friends with names
##### Posts
  * add yellow (notepad style) note box for flashes (?)
  * group posts by day (using light gray bar saying today/yesterday/may)
