# Node Rest Api

[![npm](https://img.shields.io/npm/v/express-rest-framework.svg?maxAge=2592000)]()
[![npm](https://img.shields.io/npm/l/express-rest-framework.svg?maxAge=2592000)]()
[![npm](https://img.shields.io/npm/dt/express-rest-framework.svg?maxAge=2592000)]()

Node-Rest-Api is a helper library that help creating backend rest api faster.
Apart from a list of predefined mixins new ones can also be created for total
customization and same goes for the serializers.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisities

Get a copy of the codes from npm using

```
npm install express-rest-framework
```

### Simple usage

Express rest framework needs a json document to describe the api. Consider the
following document
```
{
  "serializer":"express-rest-framework/serializers/json-serializer",
  "rules":{
    "/feedback/:id":{
      "db":"feedback",
      "modelName":"feedback",
      "mixin":"express-rest-framework/mixin/listViewDeleteMixin",
      "fields":["email","content"]
    },
     "/feedback":{
      "db":"feedback",
      "modelName":"feedback",
      "mixin":"express-rest-framework/mixin/listViewMixin",
      "fields":["email","content"],
      "filter":{
        "email":"test@test.com"
      }
    }
  }
}
```
the above document can be passed into the `express-rest-framework` using

```
require('express-rest-framework')(app,context,models);
```

where
* *app*     : express app
* *context* : json document that we just described above
* *models*  : mongoose model dictionary

The description is pretty much self explanatory. Although this example shows
and uses `serializers` and `mixin` provided by the framework, it is very
much hackable to use own serializers and mixins at the same time.

## Running the tests

All the tests for the framework are written in mocha

## Deployment

Deployment details and examples on use could be found at [Project wiki](https://github.com/neocoretex/nodeRestApi/wiki)

## Contributing

Please read [CodingStyle.md](CodingStyle.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/neocoretex/nodeRestApi/tags). 

## Authors

* **Rahul Bhola** - *Initial work* - [georoot](https://github.com/georoot)
* **Gurukiran V** - *Tests* - [Gurukiran097](https://github.com/Gurukiran097)

See also the list of [contributors](https://github.com/neocoretex/nodeRestApi/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* Neocoretex team for helping in development of the project
