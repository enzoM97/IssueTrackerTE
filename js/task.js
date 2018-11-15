/**
*
* Class that represents a task
*
**/

var Task = class{
	constructor(id, title, description, creation_date, created_by, 
		asigned_to, status, criticality){
		this.id = id;
		this.title = title;
		this.description = description;
		this.creation_date = creation_date;
		this.created_by = created_by;
		this.asigned_to = asigned_to;
		this.status = status;
		this.criticality = criticality;
	}
	getId(){
		return this.id;
	}
	getTitle(){
		return this.title;
	}
	getDescription(){
		return this.description;
	}
	getCreationDate(){
		return this.creation_date;
	}
	getCreatedBy(){
		return this.created_by;
	}
	getAsignedTo(){
		return this.asigned_to;
	}
	getStatus(){
		return this.status;
	}
	getCriticality(){
		return this.criticality;
	}
}