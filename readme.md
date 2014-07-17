[![Build Status](https://travis-ci.org/lorenzofox3/lrCloudinary.svg?branch=master)](https://travis-ci.org/lorenzofox3/lrCloudinary)

# lrCloudinary

An Angular filter to perform image transformations on [cloudinary](http://cloudinary.com/) hosted images in a declarative way. There is no dependency other than Angular framework itself.

## Getting started

1. Add the script `lrCloudinary.js` or the minified version (lrCloudinary.min.js) in your application. 
2. Register the module `angular.module('myApp',['lrCloudinary'])
3. Configure the module to use at least your cloud name 
```javascript
angular.module('myApp',['lrCloudinary']).config(function(lrCloudinaryUrlProvider){
  lrCloudinaryUrlProvider.setConfig({cloudName: 'YOUR CLOUD NAME'});
};
```

### syntax

you can bind an image src to a cloudinary public_id and then use the filter options if you want to perform transformations (or pass no arguments if you simply want to display the image as it has been uploaded
```html
<img ng-src="{{image.public_id | lrCloudinaryFilter:{ width:200, height:200, crop:'fill', format:'gif'}}}" alt="alternative"/>
```
the supported options are 

1. size
2. height
3. crop mode
4. format

## developers

simply run `npm install` to download the developement dependencies then run `npm test`.
You cun alternatively run `gulp karma-CI`

## Licence

> Copyright (C) 2014 Laurent Renard.
>
> Permission is hereby granted, free of charge, to any person
> obtaining a copy of this software and associated documentation files
> (the "Software"), to deal in the Software without restriction,
> including without limitation the rights to use, copy, modify, merge,
> publish, distribute, sublicense, and/or sell copies of the Software,
> and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions:
>
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
> NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
> BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
> ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
> CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
