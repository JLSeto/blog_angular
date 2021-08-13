import { SafeResourceUrl } from "@angular/platform-browser";

export class ScreenDimensions 
{
    width!   :  number;
    height!  :  number;
}

export class Projects 
{
    //filter
    type!           :   string[];
    //Left View
    image!          :   string;
    title!          :   string;
    date!           :   Date;
    subtitle!       :   string;
    description!    :   string;
    link!           :   string;
    //Right View
    details!        :   Details[];
    demo?           :   Details;
    hardware!       :   string[];
    software!       :   string[];
    references!     :   {link: string, title: string}[];
}

export class Details
{
    heading?        : string; 
    notes?          : string; 
    list?           : string;
    tableList?      : string[];
    img?            : string; 
    video?          : string; 
    git?            : string;
}