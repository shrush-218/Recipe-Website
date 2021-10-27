const fs = require("fs");
module.exports.data_compile = 

    function (){
    
        let country_data = fs.readFileSync("./country.json")
        let  country = JSON.parse(country_data);
        country = country["ref_country_codes"]
        
        let nation_dish = fs.readFileSync("./national_dish.json")
        const national_dish = JSON.parse(nation_dish);
        
        let final_data = [];
      
        national_dish.forEach( async element => {
            let data = {country : element.country , dish : element.dish};
            await country.forEach( async c => {
                if(c.country === element.country){
                    data.latitude = c.latitude;
                    data.longitude =  c.longitude
                    final_data.push(data);
                }
            });
        });
        return final_data;
    }

