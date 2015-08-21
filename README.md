# Marvel comic / creator browser by R. Bevillard

This project has been made as a test for [Amplitude Studios](http://amplitude-studios.com), it simply allows you to search 
for a Marvel comic or creator and fetch the results. You can see a description of the item as well.

The app has been made with AngularJS and fetches results from the [Marvel API](http://developer.marvel.com).


## Getting Started

To get you started you can simply clone the repository and install the dependencies:

### Prerequisites

You need git to clone the angular-seed repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

The app uses a number of node.js tools. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone the repo

Clone the rb_marvel repository using [git][http://git-scm.com/]:

```
git clone https://github.com/rombevillard/rb_marvel
cd rb_marvel
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager](https://www.npmjs.org/).
* We get the angular code via `bower`, a [client-side code package manager](http://bower.io/).

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

### Run the Application

#### Run locally

The project is configured with a basic nodejs web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app/`.


#### Run in production

You can also browse the app online at [http://rbvl.site50.net](http://rbvl.site50.net)


## Testing

There are two kinds of tests in the angular-seed application: Unit tests and End to End tests.

### Running Unit Tests

The angular-seed app comes preconfigured with unit tests. These are written in
[Jasmine](http://jasmine.github.io/), which runs with the [Karma Test Runner](http://karma-runner.github.io/).

* the configuration is found at `karma.conf.js`
* the unit tests are found next to the code they are testing and are named as `..._test.js`.

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will sit and
watch the source and test files for changes and then re-run the tests whenever any of them change.
This is the recommended strategy; if your unit tests are being run every time you save a file then
you receive instant feedback on any changes that break the expected code functionality.

You can also ask Karma to do a single run of the tests and then exit.  This is useful if you want to
check that a particular version of the code is operating as expected.  The project contains a
predefined script to do this:

```
npm run test-single-run
```

## Contact

rombevillard-at-gmail.com
