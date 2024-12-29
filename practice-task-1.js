// Task -1: 
// console log the secondary school location of Sophia.
// console log the primary school location of Sophia.
let data = {
    Sophia: {
        id: 33,
        study: [
            {
                primary:
                [
                    {school_name: "ABC primary school"},
                    {location: "Peters burg"},
                ]
            },
            {
                secondary:
                [
                    {school_name: "ABC secondary school"},
                    {
                        location: "St Lorence",
                    }
                ]
            }
        ]
    }
};

let primarySchoolLocation = data.Sophia.study[0].primary[1].location;
console.log(primarySchoolLocation);

let secondarySchoolLocation = data.Sophia.study[1].secondary[1].location;
console.log(secondarySchoolLocation);




// console.log(data.Sophia.study[0].primary[1]);
// console.log(data.Sophia.study[1].secondary[1]);