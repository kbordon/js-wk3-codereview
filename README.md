# Zookeeper
### Animal Tracking Application for Angular Code Review (_12.08.2017_)
#### By Kimberly Bordon

## Description
_This is an application that will allow zoo caretakers to track their zoo's animals. The app will allow the user to view all animals immediately, or filter the animals by their desired parameters. It will allow the caretaker to enter newly admitted animals through a form, recording a given list of details. The user can also edit an existing record._

## Specs
| Behavior | Input Example | Output Example |
|-|-|-|
| The user can view all animals currently logged upon loading the app by default. | User goes to page. | Page displays a list of all animals. |
| The user can view add a newly admitted animal. | User clicks "Add" button, and fills out a form that appears. | Page displays confirmation that animal was added, which can be exited to return to view of all animals. |
| The user can filter the animals being viewed by age, showing only young, or mature animals. | User selects "young" from drop-down menu. | Page displays list of only animals that are under 2 years old. |
| The user can edit currently existing animals by clicking "Edit" or similar edit symbol on the specific animal. | User clicks "Edit." | Edit form appears as pop-up, and user can choose to exit the window to cancel or "Save Changes." |

### Wishlist
| Behavior | Input | Output |
|-|-|-|
| User can remove an animal that is no longer with the zoo. | User clicks "Remove" button on edit form. | Page shows window to confirm user truly wishes to remove the animal, or cancel. |

* Allow user to enter more data to form, such as medical conditions, or other special notes, or trainer names.
* ~~When no animals are shown, make a message visible to user so they be informed that their filters had no matches.~~
* Better styling.
* Edit form allows all details to be edited.
* More filter options available
* Rearrange app component structure so that when either the edit form or add form appears, the change in focus is more apparent.
* Rearrange forms.


## Setup/Install

* Make sure you have [Node](https://nodejs.org/en/download/) and the npm (Node package manager, which should come automatically) installed.
* Go to [this repository page](https://github.com/kbordon/js-wk3-codereview), and download the zip file, and open it. Or, clone the project by running the command in terminal `$ git clone https://github.com/kbordon/js-wk3-codereview.git`.
* Navigate to top level folder of the cloned repository in terminal or powershell, and enter the following commands:
```
$ npm install
$ bower install
```

#### Testing
* At this moment, there are no tests available for this repository.

#### Running/Production
* To build project, enter the following:
```
$ gulp build
$ gulp serve
```

* To build the project to be production ready, add the production flag to the build command like so:
`$ gulp build --production`


## Known Bugs
There are currently no *known* bugs. (😉)

## Technology Used
* Atom
* Node
* Bower
* Angular 2
* ... and many more packages. In top level of project folder, open `package.json` and `bower.json` in Atom (or your preferred text editor) and look for `"devDependencies"` and `"dependencies"` respectively to see

## Contact details
_Email Kimberly at [kbordon@gmail.com](mailto:kbordon@gmail.com) for comments, questions, or concerns._
## License
*This software is licensed under the MIT license.*

Copyright © 2017 **Kimberly Bordon**
