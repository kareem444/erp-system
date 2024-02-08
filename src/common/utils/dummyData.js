const moment = require("moment");

module.exports = Object.freeze({
    CALENDAR_INITIAL_EVENTS: [
        { title: "Product call", theme: "GREEN", startTime: moment().add(-12, 'd').startOf('day'), endTime: moment().add(-12, 'd').endOf('day') },
        { title: "Meeting with tech team", theme: "PINK", startTime: moment().add(-8, 'd').startOf('day'), endTime: moment().add(-8, 'd').endOf('day') },
        { title: "Meeting with Cristina", theme: "PURPLE", startTime: moment().add(-2, 'd').startOf('day'), endTime: moment().add(-2, 'd').endOf('day') },
        { title: "Meeting with Alex", theme: "BLUE", startTime: moment().startOf('day'), endTime: moment().endOf('day') },
        { title: "Product Call", theme: "GREEN", startTime: moment().startOf('day'), endTime: moment().endOf('day') },
        { title: "Client Meeting", theme: "PURPLE", startTime: moment().startOf('day'), endTime: moment().endOf('day') },
        { title: "Client Meeting", theme: "ORANGE", startTime: moment().add(3, 'd').startOf('day'), endTime: moment().add(3, 'd').endOf('day') },
        { title: "Product meeting", theme: "PINK", startTime: moment().add(5, 'd').startOf('day'), endTime: moment().add(5, 'd').endOf('day') },
        { title: "Sales Meeting", theme: "GREEN", startTime: moment().add(8, 'd').startOf('day'), endTime: moment().add(8, 'd').endOf('day') },
        { title: "Product Meeting", theme: "ORANGE", startTime: moment().add(8, 'd').startOf('day'), endTime: moment().add(8, 'd').endOf('day') },
        { title: "Marketing Meeting", theme: "PINK", startTime: moment().add(8, 'd').startOf('day'), endTime: moment().add(8, 'd').endOf('day') },
        { title: "Client Meeting", theme: "GREEN", startTime: moment().add(8, 'd').startOf('day'), endTime: moment().add(8, 'd').endOf('day') },
        { title: "Sales meeting", theme: "BLUE", startTime: moment().add(12, 'd').startOf('day'), endTime: moment().add(12, 'd').endOf('day') },
        { title: "Client meeting", theme: "PURPLE", startTime: moment().add(16, 'd').startOf('day'), endTime: moment().add(16, 'd').endOf('day') },
    ],

    RECENT_TRANSACTIONS: [
        { 'transaction-id': 1, status:"approved",'bill-id': 1, quantity: "5k", 'transaction-type': "buy",name: "Alex",store: "Ereena", avatar: "https://s7d1.scene7.com/is/image/mcdonalds/beef-burger-jdh-v1_b:product-header-desktop?wid=830&hei=456&dpr=off", email: "alex@dashwind.com", location: "Paris", 'item-groups': "fruits",amount: 100, date: moment().endOf('day') },
        { 'transaction-id': 2, status:"declined",'bill-id': 2, quantity: "6k", 'transaction-type': "sell",name: "Ereena",store: "Alex", avatar: "https://s7d1.scene7.com/is/image/mcdonalds/beefburgermeal:product-header-desktop?wid=830&hei=456&dpr=off", email: "ereena@dashwind.com", location: "London", 'item-groups': "fruits",amount: 190, date: moment().add(-1, 'd').endOf('day') },
        { 'transaction-id': 3, status:"pending",'bill-id': 3, quantity: "4k", 'transaction-type': "buy",name: "John",store: "John", avatar: "https://s7d1.scene7.com/is/image/mcdonalds/mcd-Big-Mac-new-uae:nutrition-calculator-tile?wid=750&hei=750&dpr=off", email: "jhon@dashwind.com", location: "Canada", 'item-groups': "fruits",amount: 112, date: moment().add(-1, 'd').endOf('day') },
        { 'transaction-id': 4, status:"approved",'bill-id': 4, quantity: "3k", 'transaction-type': "sell",name: "Matrix",store: "Ereena", avatar: "https://static.aljamila.com/styles/1100x732_scale/public/2017/10/17/1406861-482006378.jpg", email: "matrix@dashwind.com", location: "Peru", 'item-groups': "fruits",amount: 111, date: moment().add(-1, 'd').endOf('day') },
        { 'transaction-id': 5, status:"approved",'bill-id': 12, quantity: "2k", 'transaction-type': "add",name: "Virat",store: "Matrix",  avatar: "https://static.aljamila.com/styles/1100x732_scale/public/2017/10/17/1406861-482006378.jpg", email: "virat@dashwind.com", location: "London", 'item-groups': "vegetables",amount: 190, date: moment().add(-2, 'd').endOf('day') },
        { 'transaction-id': 6, status:"declined",'bill-id': 134, quantity: "57k", 'transaction-type': "disbursment",name: "Miya", store: "Alex", avatar: "https://static.aljamila.com/styles/1100x732_scale/public/2017/10/17/1406881-661969450.jpg", email: "miya@dashwind.com", location: "Paris", 'item-groups': "fruits",amount: 230, date: moment().add(-2, 'd').endOf('day') },
        { 'transaction-id': 7, status:"pending",'bill-id': 34, quantity: "5g", 'transaction-type': "add",name: "Virat",store: "John",  avatar: "https://s7d1.scene7.com/is/image/mcdonalds/beef-burger-jdh-v1_b:product-header-desktop?wid=830&hei=456&dpr=off", email: "virat@dashwind.com", location: "Canada", 'item-groups': "fruits",amount: 331, date: moment().add(-2, 'd').endOf('day') },
        { 'transaction-id': 8, status:"approved",'bill-id': 234, quantity: "5g", 'transaction-type': "buy",name: "Matrix",store: "Virat", avatar: "https://static.aljamila.com/styles/1100x732_scale/public/2017/10/17/1406861-482006378.jpg", email: "matrix@dashwind.com", location: "London", 'item-groups': "fruits",amount: 581, date: moment().add(-2, 'd').endOf('day') },
        { 'transaction-id': 9, status:"declined",'bill-id': 1234, quantity: "9g", 'transaction-type': "add",name: "Ereena",store: "Alex",  avatar: "https://s7d1.scene7.com/is/image/mcdonalds/beef-burger-jdh-v1_b:product-header-desktop?wid=830&hei=456&dpr=off", email: "ereena@dashwind.com", location: "Tokyo", 'item-groups': "fruits",amount: 151, date: moment().add(-2, 'd').endOf('day') },
        { 'transaction-id': 10, status:"pending",'bill-id': 1234, quantity: "33k", 'transaction-type': "disbursment",name: "John",store: "John",  avatar: "https://s7d1.scene7.com/is/image/mcdonalds/beefburgermeal:product-header-desktop?wid=830&hei=456&dpr=off", email: "jhon@dashwind.com", location: "Paris", 'item-groups': "vegetables",amount: 91, date: moment().add(-2, 'd').endOf('day') },
        { 'transaction-id': 11, status:"approved",'bill-id': 1234, quantity: "56g", 'transaction-type': "disbursment",name: "Virat",store: "Alex",  avatar: "https://s7d1.scene7.com/is/image/mcdonalds/beef-burger-jdh-v1_b:product-header-desktop?wid=830&hei=456&dpr=off", email: "virat@dashwind.com", location: "Canada", 'item-groups': "fruits",amount: 161, date: moment().add(-3, 'd').endOf('day') },
        { 'transaction-id': 12, status:"approved",'bill-id': 1234, quantity: "51k", 'transaction-type': "buy",name: "Matrix", store: "Alex", avatar: "https://static.aljamila.com/styles/1100x732_scale/public/2017/10/17/1406861-482006378.jpg", email: "matrix@dashwind.com", location: "US", 'item-groups': "fruits",amount: 121, date: moment().add(-3, 'd').endOf('day') },
        { 'transaction-id': 13, status:"declined",'bill-id': 1234, quantity: "25k", 'transaction-type': "buy",name: "Ereena",store: "Virat",  avatar: "https://static.aljamila.com/styles/1100x732_scale/public/2017/10/17/1406881-661969450.jpg", email: "jhon@dashwind.com", location: "Tokyo", 'item-groups': "fruits",amount: 713, date: moment().add(-3, 'd').endOf('day') },
        { 'transaction-id': 14, status:"pending",'bill-id': 1234, quantity: "35k", 'transaction-type': "disbursment",name: "John",store: "Alex",  avatar: "https://s7d1.scene7.com/is/image/mcdonalds/beefburgermeal:product-header-desktop?wid=830&hei=456&dpr=off", email: "ereena@dashwind.com", location: "London", 'item-groups': "protines",amount: 217, date: moment().add(-3, 'd').endOf('day') },
        { 'transaction-id': 15, status:"approved",'bill-id': 1234, quantity: "55g", 'transaction-type': "add",name: "Virat",store: "Alex",  avatar: "https://s7d1.scene7.com/is/image/mcdonalds/beef-burger-jdh-v1_b:product-header-desktop?wid=830&hei=456&dpr=off", email: "virat@dashwind.com", location: "Paris", 'item-groups': "fruits",amount: 117, date: moment().add(-3, 'd').endOf('day') },
        { 'transaction-id': 16, status:"declined",'bill-id': 1234, quantity: "3k", 'transaction-type': "buy",name: "Miya",store: "Virat",  avatar: "https://static.aljamila.com/styles/1100x732_scale/public/2017/10/17/1406861-482006378.jpg", email: "jhon@dashwind.com", location: "Canada", 'item-groups': "fruits",amount: 612, date: moment().add(-3, 'd').endOf('day') },
        { 'transaction-id': 17, status:"approved",'bill-id': 1234, quantity: "5k", 'transaction-type': "sell",name: "Matrix", store: "Alex", avatar: "https://static.aljamila.com/styles/1100x732_scale/public/2017/10/17/1406881-661969450.jpg", email: "matrix@dashwind.com", location: "London", 'item-groups': "fruits",amount: 631, date: moment().add(-3, 'd').endOf('day') },
        { 'transaction-id': 18, status:"approved",'bill-id': 1234, quantity: "1k", 'transaction-type': "buy",name: "Virat",store: "Alex",  avatar: "https://s7d1.scene7.com/is/image/mcdonalds/beefburgermeal:product-header-desktop?wid=830&hei=456&dpr=off", email: "ereena@dashwind.com", location: "Tokyo", 'item-groups': "fruits",amount: 151, date: moment().add(-3, 'd').endOf('day') },
    ],

    DUMMY_INVOICE_DATA: [
        {
            id: "qkda41dadawdawd",
            type: "POS",
            price: 100,
            date: new Date()
        },
        {
            id: "qkdwadawdda41dadawdawd",
            type: "Delivery",
            price: 150,
            date: new Date()
        },
        {
            id: "qkda41dadawdawd",
            type: "POS",
            price: 100,
            date: new Date()
        },
        {
            id: "qkdwadawdda41dadawdawd",
            type: "Delivery",
            price: 150,
            date: new Date()
        },
        {
            id: "qkda41dadawdawd",
            type: "POS",
            price: 100,
            date: new Date()
        },
        {
            id: "qkdwadawdda41dadawdawd",
            type: "Delivery",
            price: 150,
            date: new Date()
        },
        {
            id: "qkda41dadawdawd",
            type: "POS",
            price: 100,
            date: new Date()
        },
        {
            id: "qkdwadawdda41dadawdawd",
            type: "Delivery",
            price: 150,
            date: new Date()
        },
        {
            id: "qkda41dadawdawd",
            type: "POS",
            price: 100,
            date: new Date()
        },
    ]
});