var AWS = require("aws-sdk");
var fs = require('fs');

AWS.config.update({
  region: "us-east-1"
});

console.log("Writing entries to MenuLinks table.");

var dynamodb = new AWS.DynamoDB.DocumentClient();

var menuLinksData = 
  JSON.parse(fs.readFileSync('../data/menu_links.json', 'utf8'));

menuLinksData.forEach(function(menuLink) {
    var params = {
        TableName: "MenuLinks",
        Item: {
        "class": menuLink.class,
        "href": menuLink.href,
        "text": menuLink.text
        }
    };

    dynamodb.put(params, function(err, data) {
        if (err)
        console.error("Unable to load data into table for menu links",
        menuLink.text, ". Error: ", JSON.stringify(err, null, 2))
        else
        console.log("Added", menuLink.text, "to table.")
    });
});

console.log("Writing entries to Accessibilities table.");

var accessibilitiesData = 
JSON.parse(fs.readFileSync('../data/accessibilities.json', 'utf8'));
  
accessibilitiesData.forEach(function(accessibililty) {
    var params = {
        TableName: "Accessibilities",
        Item: {
        "name": accessibililty.name
        }
    };

    dynamodb.put(params, function(err, data) {
        if (err)
        console.error("Unable to load data into table for accessibility",
                        accessibililty.name, ". Error: ", JSON.stringify(err, null, 2))
        else
        console.log("Added", accessibililty.name, "to table.")
    })
});  

console.log("Writing entries to GalleryImages table.");

var galleryImagesData = 
  JSON.parse(fs.readFileSync('../data/gallery.json', 'utf8'));

galleryImagesData.forEach(function(galleryImage) {
    var className = galleryImage.className;
    if (className.trim() == "")
    className = "no_class";

    var params = {
        TableName: "GalleryImages",
        Item: {
            "src": galleryImage.src,
            "alt": galleryImage.alt,
            "className": className
        }
    };

    dynamodb.put(params, function(err, data) {
        if (err)
            console.error("Unable to load data into table for gallery images",
                        galleryImage.src, ". Error: ", JSON.stringify(err, null, 2))
        else
            console.log("Added", galleryImage.src, "to table.")
    });
});

console.log("Writing entries to Services table.");

var servicesData = 
JSON.parse(fs.readFileSync('../data/services.json', 'utf8'));
  
servicesData.forEach(function(service) {
    var params = {
        TableName: "Services",
        Item: {
        "name": service.name
        }
    };

    dynamodb.put(params, function(err, data) {
        if (err)
        console.error("Unable to load data into table for services",
                        service.name, ". Error: ", JSON.stringify(err, null, 2))
        else
        console.log("Added", service.name, "to table.")
    })
});  