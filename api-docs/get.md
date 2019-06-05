# Photo Resources

    GET api/restaurants/:id/photos

## Description
Returns all photos for a specific restaurant

***

## URL Params
**Required:**
    `id=[integer]`
***

## Return format
A JSON object containing keys **restaurant_id**, **restaurant_name**, and **photos**, where **photos** is an array containing the photo urls.

## Success

- **200** 

***

## Errors

- **404** — Photo with the specified ID does not exist.

***

## Example
**Request**

    api/restaurants/1076/photos

**Return** __shortened for example purpose__
``` json
{
  "restaurant_id": 1076,
  "restaurant_name": "Narisawa",
  "photos": [
    "https://s3.amazonaws.com/eugeniazagatphotos/clfdzqzfc0.jpg",
    "https://s3.amazonaws.com/eugeniazagatphotos/iewp7uz5dg.jpg",
    "https://s3.amazonaws.com/eugeniazagatphotos/80n5fgyy63.jpg",
    "https://s3.amazonaws.com/eugeniazagatphotos/57wcegy6vf.jpg",
    "https://s3.amazonaws.com/eugeniazagatphotos/bp2xgq6pxk.jpg",
    "https://s3.amazonaws.com/eugeniazagatphotos/jfok8jx58n.jpg",
    "https://s3.amazonaws.com/eugeniazagatphotos/slj1oezllk.jpg",
  ]
}
```