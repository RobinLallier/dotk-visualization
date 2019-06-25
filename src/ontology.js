import * as d3 from 'd3';

const ontology = `value1;value2;value3;value4;value5;value6;value7;value8;value9;
Abstract;Capability of international organization;;;;;;;;
Abstract;Learning;UTT;Alternate between theory and apprentice training center;;;;;;
Abstract;Learning;UIMM;Formation continue and alternation training;;;;;;
Abstract;Learning;IUT;Alternation training;;;;;;
Abstract;Learning;CCI Troyes;Enhance learning and alternation training;;;;;;
Abstract;Substance Quantity;;;;;;;;
Abstract;Region;Physical Region;Product System optimization;Optimizing the company's logistic;;;;;
Abstract;Region;Physical Region;environmental geography;Environmental club;Environmental & sustainable development in industries;;;;
Abstract;Region;Physical Region;environmental geography;Safety &quality of soil and underground water;;;;;
Abstract;Region;Physical Region;environmental geography;Decrease of impact on the natural environment;;;;;
Abstract;Region;Physical Region;environmental geography;Protection of landscapes and heritage;;;;;
Abstract;Region;Physical Region;Regional scale;Local;;;;;
Abstract;Region;Physical Region;Regional scale;Region;;;;;
Abstract;Region;Physical Region;Regional scale;National;;;;;
Abstract;Region;Physical Region;Regional scale;International;;;;;
Abstract;Region;Non-Physical Region;Topic;;;;;;
Abstract;Region;Non-Physical Region;Market;Cost;;;;;
Abstract;Region;Non-Physical Region;Market;Client satisfaction;Transformation site;;;;
Abstract;Region;Non-Physical Region;Market;Client satisfaction;Customer relation (Call center);;;;
Abstract;Region;Non-Physical Region;Experience;;;;;;
Abstract;Region;Non-Physical Region;Skill;Res'Aube;;;;;
Abstract;Region;Non-Physical Region;Culture;;;;;;
Abstract;Region;Non-Physical Region;;;;;;;
Abstract;Region;Non-Physical Region;;;;;;;
Abstract;Region;Non-Physical Region;;;;;;;
Abstract;Region;Non-Physical Region;;;;;;;
Abstract;Attribute;Brand;Lacoste;;;;;;
Abstract;Attribute;Brand;Le célèbre crocodile vert;;;;;;
Abstract;Action;Behavior;;;;;;;
Abstract;Substance Property;;;;;;;;
Endurants;Quality;Measurable resource, waste;;;;;;;
Endurants;Quality;Product Quality;;;;;;;
Endurants;Quality;Waste Product;Recycled wastes;;;;;;
Endurants;Quality;Product from Substance;;;;;;;
Endurants;Quality;Material Produced;;;;;;;
Endurants;Quality;Measurable resource;;;;;;;
Endurants;Quality;Percent of emission;;;;;;;
Endurants;Substantial;Physical Substantial;Physical object;Physical scale;Localities (city);;;;
Endurants;Substantial;Physical Substantial;Physical object;Physical scale;Region (province);;;;
Endurants;Substantial;Physical Substantial;Physical object;Physical scale;National (country);;;;
Endurants;Substantial;Physical Substantial;Physical object;Physical scale;International (world);;;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Logistic;Park logistic;Reshipment of products;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Logistic;Park logistic;Inventory Management;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Logistic;Park logistic;Sotrage;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Logistic;Highway and airport;;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Geographical capital;Club of industrial ecology;;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Assembly;;;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Manufacturing;Medical & dental;;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Manufacturing;Sport equipment;;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Manufacturing;Plastic;;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Manufacturing;Non-metallic mineral products;;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Manufacturing;Chain;;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Manufacturing;Food products;;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Manufacturing;Cardboard, paper;;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Manufacturing;Ceramic;;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Manufacturing;Textiles;;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Substance flow;Physical waste;Revovery of stored wastes;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Substance flow;Physical Product;Flavor circuit;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Substance flow;Physical Product;Organic agriculture;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Substance flow;Physical resource;;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Regulations;Environmental regulation;Regulation of industrial ecology;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Regulations;Environmental regulation;Developing renewable energy;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Regulations;Environmental regulation;Contribute to controlling energy;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Regulations;Environmental regulation;Development of recycling sector;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Regulations;Environmental regulation;Environmental issue awareness & information actions;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Regulations;Environmental regulation;Democratic collective for water;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Rules;;;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Energy Product;Electricity;Wind turbine;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Energy Product;Electricity;Solar cells;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Energy Product;Heating;Biomass boiler room;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Energy Product;Heating;Heating network through water circuit;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Norm;;;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Quaternary economy;Satisfaction survey by Troyes Champagne tourism;;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Produced substance;;;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Infrastructure;Industry;Renewable Heat (SEM energy);;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Infrastructure;Industry;Transport equipment;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Infrastructure;Industry;Textiles;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Infrastructure;Industry;Metal product;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Infrastructure;Industry;Foodstuffs;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Infrastructure;Industry;Rubber & plastic;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Infrastructure;Industry;Paper & printing;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Infrastructure;Transport;Rail road;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Infrastructure;Transport;Land transport;Regular road;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Infrastructure;Transport;Land transport;Road freight;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Infrastructure;Transport;Land transport;Green route;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Technology;Collection, treatment and distribution of water;;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Technology;Disposal of non-hazardous waste;;;
Endurants;Substantial;Physical Substantial;Physical object;Non-agentive physical object;Technology;Central heating network at city scale;;;
Endurants;Substantial;Physical Substantial;Physical object;Agentive physical object;Supplier;Aub'protect (safety clothes);;;
Endurants;Substantial;Physical Substantial;Physical object;Agentive physical object;Supplier;Dryat industry (welding equipment);;;
Endurants;Substantial;Physical Substantial;Physical object;Agentive physical object;Supplier;Marne (manufacturing equipment);;;
Endurants;Substantial;Physical Substantial;Physical object;Agentive physical object;Supplier;Crbtech (agricultural equipment);;;
Endurants;Substantial;Physical Substantial;Physical object;Agentive physical object;Human resource;Management of competency;;;
Endurants;Substantial;Physical Substantial;Physical object;Agentive physical object;Human resource;CCI Troyes;Employment & skill management;;
Endurants;Substantial;Physical Substantial;Physical object;Agentive physical object;Human resource;CCI Troyes;Management of human resource;;
Endurants;Substantial;Physical Substantial;Physical object;Agentive physical object;Human resource;Management of training;;;
Endurants;Substantial;Physical Substantial;Aggregate;Amount of matter;Natural resource;Water;;;
Endurants;Substantial;Physical Substantial;Aggregate;Amount of matter;Natural resource;Forest & woods;;;
Endurants;Substantial;Physical Substantial;Aggregate;Amount of matter;Natural resource;Sable;;;
Endurants;Substantial;Physical Substantial;Aggregate;Amount of matter;Natural resource;Bitumen;;;
Endurants;Substantial;Physical Substantial;Aggregate;Amount of matter;Natural resource;Gas;;;
Endurants;Substantial;Physical Substantial;Aggregate;Amount of matter;Natural resource;Fossil energy;;;
Endurants;Substantial;Physical Substantial;Aggregate;Amount of matter;Natural resource;Wind;Wind turbine;;
Endurants;Substantial;Non-Physical Substantial;Non-physical object;Social object;Agentive social object;Social capital;Group;;
Endurants;Substantial;Non-Physical Substantial;Non-physical object;Social object;Agentive social object;Social capital;Society;Social housing;
Endurants;Substantial;Non-Physical Substantial;Non-physical object;Social object;Agentive social object;Social capital;Society;Medical accommodation for disable adults;
Endurants;Substantial;Non-Physical Substantial;Non-physical object;Social object;Non-agentive social object;Service for client;Recruitment Service;;
Endurants;Substantial;Non-Physical Substantial;Non-physical object;Social object;Non-agentive social object;Service for client;Surveillance service;;
Endurants;Substantial;Non-Physical Substantial;Non-physical object;Social object;Non-agentive social object;Service for client;Postal service company;;
Endurants;Substantial;Non-Physical Substantial;Non-physical object;Social object;Non-agentive social object;Intellectual capital;;;
Endurants;Substantial;Non-Physical Substantial;Non-physical object;Social object;Non-agentive social object;Economic capital;Commercial development;;
Endurants;Substantial;Non-Physical Substantial;Non-physical object;Social object;Non-agentive social object;Economic capital;Agriculture of Aube;;
Endurants;Substantial;Non-Physical Substantial;Non-physical object;Social object;Non-agentive social object;Economic capital;Circular economy;;
Endurants;Substantial;Non-Physical Substantial;Non-physical object;Social object;Non-agentive social object;Economic functionality;Michelin;;
Endurants;Substantial;Non-Physical Substantial;Non-physical object;Social object;Non-agentive social object;Economic functionality;Xerox;;
Endurants;Human Capital;Employer;;;;;;;
Endurants;Human Capital;Competency;;;;;;;
Endurants;Human Capital;Human resource;;;;;;;
Endurants;Human Capital;Personal development;;;;;;;
Endurants;Human Capital;Management;;;;;;;
Perdurants;Stative;Process;Sharing;Knowledge sharing;;;;;
Perdurants;Stative;Process;Sharing;Information sharing;Telecommunication;;;;
Perdurants;Stative;Process;Sharing;Information sharing;Club d'écologie industrielle de l'Aube;;;;
Perdurants;Stative;Process;Sharing;Information sharing;Internet site;;;;
Perdurants;Stative;Process;Sharing;Information sharing;Information service ;;;;
Perdurants;Stative;Process;Sharing;Value sharing;;;;;
Perdurants;Stative;Process;GIS;;;;;;
Perdurants;Stative;Process;Elementary flow;Emission;Water;;;;
Perdurants;Stative;Process;Elementary flow;Emission;Air;SO2;;;
Perdurants;Stative;Process;Elementary flow;Emission;Air;NO2;;;
Perdurants;Stative;Process;Elementary flow;Emission;Air;CO;;;
Perdurants;Stative;Process;Elementary flow;Emission;Soil;;;;
Perdurants;Stative;Process;Politic;Economic activities for local employment;;;;;
Perdurants;Stative;Process;Politic;Wealth creation;Work factor;Human activities;Intellectual;;
Perdurants;Stative;Process;Politic;Wealth creation;Work factor;Human activities;Manual;;
Perdurants;Stative;Process;Politic;Wealth creation;Capital factor;Circulation fixed capital;;;
Perdurants;Stative;Process;Politic;Wealth creation;Capital factor;Circulation technical capital;;;
Perdurants;Stative;Process;Politic;Wealth creation;Natural resource;;;;
Perdurants;Stative;Process;Politic;Ecological impact;Rubbish production;;;;
Perdurants;Stative;Process;Politic;Ecological impact;Climate change;;;;
Perdurants;Stative;Process;Politic;Ecological impact;Water consumption;;;;
Perdurants;Stative;Process;Politic;Ecological impact;Energy consumption;;;;
Perdurants;Stative;Process;Race of innovation;;;;;;
Perdurants;Stative;Process;Ecosphere;;;;;;
Perdurants;Stative;Process;Management;Coordination;Balance;;;;
Perdurants;Stative;Process;Management;Coordination;Hierarchical;;;;
Perdurants;Stative;Process;Management;Group management;;;;;
Perdurants;Stative;Process;Management;Business creation;;;;;
Perdurants;Stative;Process;Management;Knowledge management;;;;;
Perdurants;Stative;Process;Management;Commercial management;;;;;
Perdurants;Stative;Process;Management;Retain/Empower employees;;;;;
Perdurants;Stative;Process;Management;Decision making;;;;;
Perdurants;Stative;Process;Management;Project management;;;;;
Perdurants;Stative;Process;Knowledge;Project management;;;;;
Perdurants;Stative;Process;Administration;Health, culture, social service;;;;;
Perdurants;Stative;Process;Administration;Administration of economic service;;;;;
Perdurants;Stative;Process;Flow circulation;;;;;;
Perdurants;Stative;Process;Governance;Consideration of societal;;;;;
Perdurants;Stative;Process;Governance;Consideration of environment;;;;;
Perdurants;Stative;Process;Governance;Consideration of stakeholder;;;;;
Perdurants;Stative;Process;Finance;Process of operation & investment;Investment funds;;;;
Perdurants;Stative;Process;Finance;Process of operation & investment;Financial service;;;;
Perdurants;Stative;Process;Innovation;R&D;Technopôle de l'Aube;;;;
Perdurants;Stative;Process;Innovation;Park of Technology & scientific activities;;;;;
Perdurants;Stative;Process;Innovation;UTT;;;;;
Perdurants;Stative;Process;Communication;Web mastering & community management;;;;;
Perdurants;Stative;Process;Communication;Social network;;;;;
Perdurants;Stative;Process;Communication;Marketing as a tool;;;;;
Perdurants;Organization;Management of document electronically between companies;;;;;;;
Perdurants;Fact;Human activities consequence;Urbanization;;;;;;
Perdurants;Fact;Human activities consequence;Production & energy consumption;;;;;;
Perdurants;Fact;Human activities consequence;Manufacturing of goods;;;;;;
Perdurants;Fact;Human activities consequence;Transportation of goods and people;;;;;;
Perdurants;Event;Achievement;Form;Capability;;;;;
Perdurants;Event;Achievement;Form;Service of council advisement;Financial support for education;;;;
Perdurants;Event;Achievement;Form;Service of council advisement;Legal wath on economic aid;;;;
Perdurants;Event;Achievement;Form;Service of council advisement;Departmental council;Departmental road;;;
Perdurants;Event;Achievement;Form;Service of council advisement;Departmental council;Tourism;;;
Perdurants;Event;Achievement;Form;Service of council advisement;Departmental council;Social action;;;
Perdurants;Event;Achievement;Form;Service of council advisement;Departmental council;Intercity transport;;;
Perdurants;Event;Achievement;Form;Service of council advisement;Departmental council;Companies benefit from actions;;;
Perdurants;Event;Achievement;Form;Service of council advisement;Management of aid to municipalities for school, sports and socio-cultural facilities;;;;
Perdurants;Event;Achievement;Form;Democracy;;;;;`

//Parse the ontology string as a csv to make it an array
	const psv = d3.dsvFormat(";");
	const array = psv.parse(ontology);
	//Clean all the empty properties of each row
	for (let row of array) {
	  delete row[""];
	  for (let column in row){
	    if (row[column] === "") 
	    {
	      delete row[column];
	    }
	  }
	}

//builds a nested tree with values from the given array
	var tree = d3.nest()
	  .key(function(d) {return d.value1})
	  .key(function(d) {return d.value2})
	  .key(function(d) {return d.value3})
	  .key(function(d) {return d.value4})
	  .key(function(d) {return d.value5})
	  .key(function(d) {return d.value6})
	  .key(function(d) {return d.value7})
	  .key(function(d) {return d.value8})
	  .key(function(d) {return d.value9})
	  .entries(array);

	let clearingTree = (tree) => {
		for (let entity of tree){
			//explores a branch of the tree
			if(entity.values && entity.values[0].key === "undefined") {
				//if finds a leaf, close the values array
				entity.values = [];
			}
			else if(entity.values) {
				//if not a leaf repeat the operation with the children
				entity.values = clearingTree(entity.values);
			}
		}
		return tree;
	}
	
	clearingTree(tree);

export default tree;