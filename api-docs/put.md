# Photo Resources

    PUT api/restaurants/photos

## Description
Updates a photo for a specific restaurant

***

## Body Params
**Required:**
```
{
  "id": [integer],
  "photo_id": [integer],
  "photo_url": [string]
}
```
***

## Return format
A JSON object containing keys **restaurant_id**, **restaurant_name**, and **photo**.

***

## Success

- **200** 

***

## Errors

- **404** — Photo with the specified ID does not exist.


***

## Example
**Request**

    api/restaurants/photos

**Return** __shortened for example purpose__
``` json
{
  "restaurant_id": 1076,
  "restaurant_name": "Narisawa",
  "photo": "https://s3.amazonaws.com/eugeniazagatphotos/clfdzqzfc0.jpg"
}
```