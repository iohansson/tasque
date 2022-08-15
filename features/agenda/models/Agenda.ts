import { Schema, model, models, Model } from 'mongoose';
import type { Task } from 'features/tasks/types';

// 1. Create an interface representing a document in MongoDB.
export interface IAgenda {
  tasks: Array<Task>;
  date: number;
  order: Array<Task['_id']>;
  user: string;
}

// 2. Create a Schema corresponding to the document interface.
const agendaSchema = new Schema<IAgenda>({
  tasks: [
    {
      _id: String,
      userId: String,
      text: { type: String, required: true },
      type: { type: String, required: true },
    },
  ],
  order: [],
  date: { type: Number, required: true },
  user: { type: String, required: true },
}, {
  virtuals: {
    id: {
      get() {
        return this._id;
      },
    },
  },
});

agendaSchema.index({
  user: 1,
  date: -1,
});

// 3. Create and export Model.
export const Agenda = (models.Agenda as Model<IAgenda>) ?? model<IAgenda>('Agenda', agendaSchema);
