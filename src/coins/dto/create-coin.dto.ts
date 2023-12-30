import { IsIn, IsNotEmpty, IsOptional, ValidateIf } from "class-validator";

export class CreateCoinDto {

    @IsOptional()
    Continent: string;	
  
    @IsNotEmpty()
    Country: string;	

    @IsNotEmpty()
    Code: string;

    @IsOptional()
    Catalog: string;	
 
    @IsNotEmpty()
    Value: string;

    @IsNotEmpty()
    Name: string;

    @IsOptional()
    Year: number;	
    
    @IsNotEmpty()
    Composition: string;	
   
    @IsNotEmpty()
    Status: string;	
    
    @IsNotEmpty()
    Price: number;	
  
    @IsOptional()
    References: string;	

    @IsNotEmpty()
    Stock: number;

    @IsNotEmpty()
    Photo1: string;	 
    
    @IsNotEmpty()
    Photo2: string;	 

    @IsOptional()
    StartDate: number ;

    @IsOptional()
    EndDate: number ;	 
 
  
}
