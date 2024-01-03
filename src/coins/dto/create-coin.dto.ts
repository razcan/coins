import { Type } from "@nestjs/common";
import { IsIn, IsNotEmpty, IsOptional, ValidateIf, IsString, IsInt,IsEmail, 
    IsNumber, IsDefined,IsNumberString, MinLength, MaxLength } from "class-validator";

export class CreateCoinDto {

    @IsNotEmpty()
    @IsString()
    Continent: string;	
  
    @IsNotEmpty()
    @IsString()
    Country: string;	

    @IsNotEmpty()
    @IsString()
    Code: string;

    @IsOptional()
    Catalog: string;	
 
    
    @IsNotEmpty()
    Value: string;

    @IsNotEmpty()
    @IsString()
    Name: string;

    @IsOptional()
    @IsNumberString()
    @MinLength(4, {
        message: 'Year should have 4 number charactes',
      })
    @MaxLength(4, {
        message: 'Year should have 4 number charactes',
     })
    Year: number;	
    
    @IsNotEmpty()
    @IsDefined()
    Composition: string;	
   
    @IsNotEmpty()
    @IsDefined()
    Status: string;	
    
    @IsNumberString()
    @IsNotEmpty()
    @IsDefined()
    Price: number;	
  
    @IsOptional()
    @IsString()
    References: string;	

    @IsDefined()
    @IsNumberString()
    Stock: number;

    @IsNotEmpty()
    @IsDefined()
    @IsString()
    Photo1: string;	 
    
    @IsNotEmpty()
    @IsDefined()
    @IsString()
    Photo2: string;	 

    @IsOptional()
    @IsNumberString()
    @MinLength(4, {
        message: 'Start Year should have 4 number charactes',
      })
    @MaxLength(4, {
        message: 'Start Year should have 4 number charactes',
     })
    StartDate: number ;

    @IsOptional()
    @IsNumberString()
    @MinLength(4, {
        message: 'End Year should have 4 number charactes',
      })
    @MaxLength(4, {
        message: 'End Year should have 4 number charactes',
     })
    EndDate: number ;	 
 
}
