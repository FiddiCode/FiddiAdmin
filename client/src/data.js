const menu =[
    {
        id:1,
        title:'main',
        listItems:[
            {
                id:1,
                title:"Homepage",
                url:'/',
                icon:"home.svg"
            },
            {
                id:2,
                title:"Profile",
                url:'/users/1',
                icon:"user.svg"
            }
        ]
    },
    {
        id:2,
        title:'lists',
        listItems:[
            {
                id:1,
                title:"Users",
                url:'/users',
                icon:"user.svg"
            },
            {
                id:2,
                title:"Products",
                url:'/products',
                icon:"products.svg"
            },
            {
                id:3,
                title:"Orders",
                url:'/orders',
                icon:"orders.svg"
            },
            {
                id:4,
                title:"Posts",
                url:'/posts',
                icon:"post2.svg"
            },
        ]
    },
    {
        id:3,
        title:'general',
        listItems:[
            {
                id:1,
                title:"Elements",
                url:'/',
                icon:"element.svg"
            },
            {
                id:2,
                title:"Notes",
                url:'/',
                icon:"notes.svg"
            },
            {
                id:3,
                title:"Forms",
                url:'/',
                icon:"forms.svg"
            },
            {
                id:4,
                title:"Calender",
                url:'/',
                icon:"calender.svg"
            },
        ]
    },
    {
        id:4,
        title:'Maintenance',
        listItems:[
            {
                id:1,
                title:"Settings",
                url:'/',
                icon:"setting.svg"
            },
            {
                id:2,
                title:"Backups",
                url:'/',
                icon:"backup.svg"
            },
        
        ]
    },
    {
        id:5,
        title:'analytics',
        listItems:[
            {
                id:1,
                title:"Charts",
                url:'/',
                icon:"chart.svg"
            },
            {
                id:2,
                title:"Logs",
                url:'/',
                icon:"log.svg"
            }
        ]
    },
];

const topDealUsers =[
    {
        id:1,
        img:"",
        username:"Elva McDonald",
        email:"elva@gmail.com",
        amount:"3.668"
    },
    {
        id:2,
        img:"",
        username:"Linnie Nelson",
        email:"linnie@gmail.com",
        amount:"3.668"
    },
    {
        id:3,
        img:"",
        username:"Brent Reeves",
        email:"brent@gmail.com",
        amount:"2.998"
    },
    {
        id:4,
        img:"",
        username:"Adeline Watson",
        email:"adeline@gmail.com",
        amount:"2.512"
    },
    {
        id:5,
        img:"",
        username:"Elva McDonald",
        email:"elva@gmail.com",
        amount:"2.134"
    },
    {
        id:6,
        img:"",
        username:"Augusta McGee",
        email:"augusta@gmail.com",
        amount:"1.932"
    },
    {
        id:7,
        img:"",
        username:"Angel Thonas",
        email:"angel@gmail.com",
        amount:"1.568"
    },
]


const chartBoxUser={
    color:"#8884d8",
    icon:"/userIcon.svg",
    title:"Total Users",
    number:"11.238",
    datakey:"users",
    percentage:45,
    chartdata:[
    {name:"sun",users:400},
    {name:"Mon",users:600},
    {name:"Tue",users:500},
    {name:"Wed",users:700},
    {name:"Thu",users:400},
    {name:"Fri",users:500},
    {name:"Sat",users:450},
],
}

const chartBoxProduct={
    color:"skyblue",
    icon:"/productIcon.svg",
    title:"Total Products",
    number:"238",
    datakey:"products",
    percentage:21,
    chartdata:[
    {name:"Sun",users:400},
    {name:"Mon",users:600},
    {name:"Tue",users:500},
    {name:"Wed",users:700},
    {name:"Thu",users:400},
    {name:"Fri",users:500},
    {name:"Sat",users:450},
    ]

}

const chartBoxRevenue={
    color:"teal",
    icon:"/revenueIcon.svg",
    title:"Total Revenue",
    number:"$56.432",
    datakey:"revenue",
    percentage:-12,
    chartdata:[
    {name:"Sun",users:400},
    {name:"Mon",users:600},
    {name:"Tue",users:500},
    {name:"Wed",users:700},
    {name:"Thu",users:400},
    {name:"Fri",users:500},
    {name:"Sat",users:450},
    ]

}

const chartBoxConversion={
    color:"gold",
    icon:"/conversionIcon.svg",
    title:"Total Ratio",
    number:"2.6",
    datakey:"ratio",
    percentage:12,
    chartdata:[
    {name:"Sun",users:400},
    {name:"Mon",users:600},
    {name:"Tue",users:500},
    {name:"Wed",users:700},
    {name:"Thu",users:400},
    {name:"Fri",users:500},
    {name:"Sat",users:450},
    ]

}

const barChartBoxRevenue={
    title:"Profit Earned",
    color:"#8884d9",
    dataKey:"profit",
    chartdata:[
      { 
        name:"Sun",
        profit:4000
        },
    {   
        name:"Mon",
        profit:6000
     },
     {   
        name:"Tue",
        profit:5000
    },

    {   
        name:"Wed",
        profit:7000
    },
    {
         name:"Thu",
        profit:4000
    },
    {
        name:"Fri",
        profit:5000
    },
    {
        name:"Sat",
        profit:4500
    },
        ]

}

const barChartBoxVisit={
    title:"Total Visit",
    color:"#FF8842",
    dataKey:"visit",
    charData:[
        {
            name:"Sun",
            visit:4000,
        },
        {
            name:"Mon",
            visit:3000,
        },
        {
            name:"Tue",
            visit:2000,
        },
        {
            name:"Wed",
            visit:4000,
        },
        {
            name:"Thu",
            visit:2500,
        },
        {
            name:"Fri",
            visit:3000,
        },
        {
            name:"Sat",
            visit:4500,
        },

    ]
}

export {menu,topDealUsers,chartBoxUser,chartBoxProduct,chartBoxRevenue,chartBoxConversion,barChartBoxVisit,barChartBoxRevenue};