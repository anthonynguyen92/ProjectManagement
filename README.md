# 1. Create Enviroment 

### How to add @angular-devkit/build-angular

Use the package manager npm to see and read more.

```bash
	npm install
```
### Update namespace and library
Go to aspnet-core\src
```sh
	dotnet restore
```

### Create Database 
#### With visual studio
Open your visual studio and get start wiht EntityFrameWorkCore.Migration
Use NuGet Package Console
```sh
	update-database
```
#### With .Net Cli
Open folder EntityFrameWorkCore.Migration
Open Powershell and run. Make sure you installed enviroment for this source. 
```sh
	dotnet ef database update
```

#2.  Run Project

Go to aspnet-core\src\StudentManagementProject.HttpApi.Host
```sh
dotnet run
```
After to angular and open with terminal
```sh
	npm start
```
### See your result
Open your browser and go to [http://localhost:4200](http://localhost:4200)

### Contributing
Please before push resquest, make sure update new source from dev branch. Please read Readme before open and run your Project for avoid generating bug or something with your device.
## License
[MIT](https://choosealicense.com/licenses/mit/)
