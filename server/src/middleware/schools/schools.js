import { SchoolsCollection } from "../../db/schema/collections.js";

export class Schools{

    static async getSchools(req, res){
            try {
                const allSchools = await SchoolsCollection.find({}).select("-password");
                if(!allSchools){
                     return res.status(500).send({ error: 'Error Fetching Schools'})

                }
                return res.status(200).json(allSchools);
                
            } catch(error) {
                return res.status(500).send({ error: error})
            }
          };
    

    static async getSchool(req, res){
        
            try {
              const { school } = req.params;
              const request = await SchoolsCollection.findOne({
                _id: school,
              });
          
              if (!request) {
               return res.status(404).send({ message: 'School not found'})
              }
            
             return res.status(200).json(request) 

            } catch (error) {
                return res.status(500).send({ error: error})
            }
          
    }


    static async updateSchool(req, res){
        try {
            //Write ur update code to update user schoolinfo collection .
        }catch(e){
            res.status(500).send({ error: e})
        }
    }

    // static async deleteSchool(req, res){

    // }


}