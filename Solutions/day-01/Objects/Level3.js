const personAccount = {
    firstName: "Oludare",
    lastName: "Ojo",
    incomes: [
        {
            income: "salary",
            description: 600000
        },
        {
            income: "investment",
            description: 10000
        }
    ],
    expenses: [
        {
            expense: "rent",
            description: 90000
        },
        {
            expense: "fuel",
            description: 40000
        }
    ],
    totalIncome: function() {
        let totalI = 0;
        this.incomes.forEach(income => {
            totalI += income.description
        }) 
        return totalI;
    },
    totalExpense: function() {
        let totalE = 0;
        this.expenses.forEach(expense => {
            totalI += expense.description
        }) 
        return totalE;
    },
    addIncome: function(income) {
        const existingIncome = this.incomes.find(income);
        if (!existingIncome) {
            return [ ...this.incomes, income];
        } else {
            console.log("You have already added this income")
        }
    },
    addExpense: function(expense) {
        const existingExpense = this.expenses.find(expense);
        if (!existingExpense) {
            return [ ...this.expenses, expense];
        } else {
            console.log("You have already added this expense")
        }
    },
    accountBalance: function() {
        return `Your account balance is ${this.totalIncome - this.totalExpense}`;
    }

}

const users = [
    {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false,
    },
    {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true,
    },
    {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true,
    },
    {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false,
    },
    {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
    },
]

const signUp = (collection, user) => {
    const existingUser = collection.find(collection => collection._id === user._id);

    if(!existingUser) {
        return [ ...collection, user];
    } else {
        console.log("This user already has an account");
    }
}

const signIn = (collection, user) => {
    const existingUser = collection.find(collection => collection._id === user._id);

    if (existingUser) {
        console.log("You are signed in");
    } else {
        console.log("This user does not exist. Please create an account");
    }
}


const products = [
    {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
    { userId: 'fg12cy', rate: 5 },
    { userId: 'zwf8md', rate: 4.5 },
    ],
    likes: [],
    },
    {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy'],
    },
    {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy'],
    },
]



const rateProduct = (id, userId, rating) => {
    const existingUser = products.forEach(product => {
        return product.ratings.find(rating => rating.userId === userId);
    });
    const existingProduct = products.find(product => product._id === id);

    if(existingProduct && existingUser) {
        return { ...existingUser, rate: rating};
    } else if (existingProduct && !existingUser) {
        return [ ...products.ratings, {userId: userId, rate: rating}]
    } else {
        console.log("This product does not exist");
    }
}

const averageRating = (products) => {
    let totalRating = 0;
    let ratingsCount = 0;

    products.forEach(product => {
        product.ratings.forEach(rating => {
            ratingsCount += 1;
            totalRating += rating.rate;
        })
    })

    return totalRating / ratingsCount;
}

console.log(averageRating(products));

const likeProduct = (id, userId) => {
    const existingLike = products.forEach(product => {
        return product.likes.find(like => like === userId);
    });
    let existingProduct = products.find(product => product._id === id);

    if(existingProduct && existingLike) {
        existingProduct = existingProduct.likes.filter(item => item !== existingLike);
    } else if (existingProduct && !existingUser) {
        return { ...existingProduct.likes, userId}
    } else {
        console.log("This product does not exist");
    }
}