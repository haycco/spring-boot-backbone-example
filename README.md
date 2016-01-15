# Spring Boot Modular Backbone Example

Project's goal is to provide a spring-boot maven java structure of the Backbone application using RequireJS and up-to-date dependencies.

This project is based on the work of Thomas Davis and his
[Organizing your application using Modules (require.js)](http://backbonetutorials.com/organizing-backbone-using-modules/) tutorial.

###Included Libraries

* [RequireJS 2.1.22](http://requirejs.org/) with [text plugin](http://requirejs.org/docs/download.html#text) for templates
* [jQuery 2.1.1](http://jquery.com/)
* [Underscore 1.7.0](http://documentcloud.github.com/underscore/)
* [Backbone 1.1.2](http://documentcloud.github.com/backbone/)
* [Bootstrap 3.3.5](https://github.com/twbs/bootstrap)
* [json2.js](https://github.com/douglascrockford/JSON-js)

###Using RequireJS Optimizer

A sample build file for [RequireJS Optimizer](http://requirejs.org/docs/optimization.html) is included in
[js/main.js](https://github.com/dzejkej/modular-backbone/blob/master/js/app.build.js). All configuration options are available [here]

###Requirements

* [Java Platform (JDK) 7](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
* [Apache Maven 3.x](http://maven.apache.org/)

###Quick start

1. `mvn clean install`
2. `mvn spring-boot:run`
3. Point your browser to [http://localhost:8080](http://localhost:8080)