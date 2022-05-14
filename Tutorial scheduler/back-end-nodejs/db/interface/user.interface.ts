import { Document } from 'mongoose';

export interface User extends Document{
    Subject: string;
    Time: string;
    Faclutyid: string;
    
}