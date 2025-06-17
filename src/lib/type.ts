import { z } from "zod"
import { Socket, Server as NetServer } from 'net';
import { Server as SocketIOServer } from 'socket.io';
import { NextApiResponse } from 'next';




export const FormSchema = z.object({email: z.string().describe('email').email({message:'Invalid Email'}),
password:z.string().describe("password").min(1,'Password is required')
});



export const CreateWorkspaceFormSchema=z.object({
    workspaceName:z.string()
    .describe('workspace Name')
    .min(1,"workspace name must be min of 1 character"),
    logo:z.any(),
});

export const UploadBannerFormSchema = z.object({
    banner: z.string().describe('Banner Image'),
  });


  export type NextApiResponseServerIo = NextApiResponse & {
    socket: Socket & {
      server: NetServer & {
        io: SocketIOServer;
      };
    };
  };






