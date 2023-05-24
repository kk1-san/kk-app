const Product = require('./model/product')

class FakeDb{
    constructor(){
        this.products = [
            {
                coverImage:'./assets/img/phone-cover.jpg',
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screens',
                heading1: 'サンプルテキスト1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                headingtext1: 'サンプルテキスト,サンプルテキスト',
                headingtext2: 'テキスト文章、テキスト文章',
                headingtext3: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.'
              },
              {
                coverImage:'./assets/img/phone-cover.jpg',
                name: 'Phone Standard',
                price: 599,
                description: 'A standard phone with one of the best screens',
                heading1: 'サンプルテキスト1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                headingtext1: 'サンプルテキスト,サンプルテキスト',
                headingtext2: 'テキスト文章、テキスト文章',
                headingtext3: 'Donec sed odio dui. .'
              },
              {
                coverImage:'./assets/img/phone-cover.jpg',
                name: 'Phone Mini',
                price: 499,
                description: 'A mini phone with one of the best cameras',
                heading1: 'サンプルテキスト1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                headingtext1: 'サンプルテキスト,サンプルテキスト',
                headingtext2: 'テキスト文章、テキスト文章',
                headingtext3: 'Donec sed odio dui. .'
              },
              {
                coverImage:'./assets/img/phone-cover.jpg',
                name: 'Phone Special',
                price: 999,
                description: 'A special phone with one of the best screens',
                heading1: 'サンプルテキスト1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                headingtext1: 'サンプルテキスト,サンプルテキスト',
                headingtext2: 'テキスト文章、テキスト文章',
                headingtext3: 'Donec sed odio dui. .'
              }
        ]
    }

    pushProductsToDB() {
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product)
                newProduct.save()
            }
        )
    }

    seeDb() {
        this.pushProductsToDB()
    }
}

module.exports = FakeDb