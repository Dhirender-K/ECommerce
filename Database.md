# Tables

## Users
- User id(email)
- Name
- Password(encrypted)
- contact information
- saved addresses

## Sellers
- seller id(email)
- Name
- joined since
- Password(encrypted)
- contact information
- address

## Transaction
- Transaction id
- Ordered by(buyer id)
- Seller (selled id)
- Date bought
- Amount
- Payment id
- Current Status(Delieverd / In Transit)
- Last location ( if still not delivered)
- Date delivered
- Rating
- type ( pre customised shoes or customization)
- review

## Inventory
- Product id
- seller
- price
- product image
- product information
- reviews

## Reviews
- review id
- rating
- reviewed by(user id)
- review text

## Payments
- Payment id
- Type ( CoD/Debit Card / UPI / Net Banking )
- Timestamp
- Amount
- Transaction id