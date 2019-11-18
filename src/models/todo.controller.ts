import { Task, ITodo} from '/todo';
import { Controller, Route, Get, Post, BodyProp, Put, Delete } from 'tsoa';

@Route('/todo')
export class TodoController extends Controller {
	@Get()
	public async getAll(): Promise<ITodo[]> {
		var item;
		try {
			let items: any = await Task.find({});
			items = items.map((item) => { return {id: item._id, description: item.description}});
			return items;
		} catch (err) {
			this.setStatus(500);
			console.error('Caught error', err);
		}
	}

	@Post()
	public async create(@BodyProp() description: string) : Promise<void> {
		const item = new Task({description: description});
		await item.save();
	}

	@Put('/{id}')
	public async update(id: string, @BodyProp() description: string) : Promise<void> {
		await Task.findOneAndUpdate({_id: id}, {description: description});
	}

	@Delete('/{id}')
	public async remove(id: string) : Promise<void> {
		await Task.findByIdAndRemove(id);
	}
}
