import {InstructorProfile} from '../shared/instructor-profile.model';
import { DataStorageService } from '../shared/data-storage.service';
export class InstructorProfileService{
    private  profilecontent :InstructorProfile[]=[];
 
    constructor(){
 
}

   
      addData(profilecontent:InstructorProfile){
    // console.log(this.profilecontent);
    //       console.log(profilecontent);
        this.profilecontent.push(profilecontent); 
    }
    getData(){
     // console.log(this.profilecontent.slice());
        return this.profilecontent;
        
      }
}