# Photo Resources

    DELETE api/restaurants/:id/photos

## Description
Deletes a photo for a specific restaurant

***

## Return format
A JSON object containing keys **restaurant_id**, **restaurant_name**, and **photo**.

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
  "photos": "https://s3.amazonaws.com/eugeniazagatphotos/clfdzqzfc0.jpg"
}
```