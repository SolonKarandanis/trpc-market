import { Access, CollectionConfig } from "payload/types";

const adminsAndUser: Access = ({ req: { user } }) => {
    if (user.role === 'admin') return true
  
    return {
      id: {
        equals: user.id,
      },
    }
}


export const Users:CollectionConfig={
    slug:"users",
    auth:true,
    access: {
        read: () => true,
        create: () => true,
       
    },
    // admin: {
    //     hidden: ({ user }) => user.role !== 'admin',
    //     defaultColumns: ['id'],
    // },
    fields:[
        {
            name:'role',
            defaultValue: 'user',
            required: true,
            type: 'select',
            options: [
                { label: 'Admin', value: 'admin' },
                { label: 'User', value: 'user' },
            ],
        }
    ],
}