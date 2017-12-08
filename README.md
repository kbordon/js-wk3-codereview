# Zookeeper
### Animal Tracking Application for Angular Code Review (_12.08.2017_)
#### By Kimberly Bordon

## Description
_This is an application that will allow zoo caretakers to track their zoo's animals. The app will allow the user to view all animals immediately, or filter by their desired parameter. It will allow the caretaker to enter newly admitted animals through a form, recording a given list of details. The user can also edit an existing record._

## Specs
| Behavior | Input Example | Output Example |
|-|-|-|
| The user can view all animals currently logged upon loading the app by default. | User goes to page. | Page displays a list of all animals. |
| The user can view add a newly admitted animal. | User clicks "Add" button, and fills out a form that appears. | Page displays confirmation that animal was added, or should should return to view of all animals. |
| The user can filter the animals being viewed by age, showing only young, or mature animals. | User selects "young" from drop-down menu. | Page displays list of only animals that are under 2 years old. |
| The user can edit currently existing animals by clicking "Edit" or similar edit symbol on the specific animal. | User clicks "Edit." | Edit form appears as pop-up, and user can choose to exit the window to cancel or "Save Changes." |

### Wishlist
| Behavior | Input | Output |
|-|-|-|
| | | |

* More wishlist items that aren't specs.


## Setup/Install

* Make sure you have [Node](https://nodejs.org/en/download/) and the npm (Node package manager, which should come automatically) installed.
* Go to [this repository page](insertyourgithubpagehere), and clone the project.
* Navigate to top level folder of the cloned repository in terminal or powershell, and enter the following commands:
```
$ npm install
$ bower install
```

#### Testing
* If you would like to add any code to this project, and then test it, you can write your tests in the file `spec/doctor-spec.js`.
* Alternatively, you can create your own test file in the same location as this file, and making sure the filename ends with the extension `-spec.js`.
* In order to run tests, from the top level of the project folder, run this command in terminal: `$ npm test`

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
