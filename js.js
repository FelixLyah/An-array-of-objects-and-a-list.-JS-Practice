let ol = document.querySelector('ol');
let btn = document.querySelector('button');
let inpName = document.querySelector('.addEmploye_name');
let inpAge = document.querySelector('.addEmploye_age');
let inpSalary = document.querySelector('.addEmploye_salary');
let p = document.querySelector('p');
let inps = document.querySelectorAll('.addEmploye');

let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];

for(let inp of inps){
    let placeholderClone = inp.placeholder;
    inp.addEventListener('click',function(){
        inp.placeholder = '';
    })
    inp.addEventListener('blur',function(){
        inp.placeholder = placeholderClone;
    })
}


btn.addEventListener('click',function(){
    employees.push({name: inpName.value, age: inpAge.value, salary: inpSalary.value});
    for(let inp of inps){
        inp.value = '';
    }
    ol.textContent = '';
    makeOl ();
    p.textContent = 'the data has changed. check console';
            setTimeout(function(){
                p.textContent = '';
            },5000)
            console.log(employees);
})

function makeOl (){
    for(let i = 0; i < employees.length; i++){
        let li = document.createElement('li');
        ol.append(li);
    
        let span1 = document.createElement('span');
        li.append(span1);
        span1.textContent = employees[i].name;
        span1.addEventListener('click',edit);
        let span2 = document.createElement('span');
        li.append(span2);
        span2.textContent = employees[i].age;
        span2.addEventListener('click',edit);
        let span3 = document.createElement('span');
        li.append(span3);
        span3.textContent = employees[i].salary;
        span3.addEventListener('click',edit);
        let span4 = document.createElement('span');
        li.append(span4);
        span4.textContent = 'delete row';
        span4.style.cursor = 'pointer';
        span4.style.color = 'red';
        span4.addEventListener('click',function(){
            li.remove();
            employees.splice(i,1)
            p.textContent = 'the data has changed. check console';
            setTimeout(function(){
                p.textContent = '';
            },5000)
            console.log(employees);
        });
    }
}

makeOl();

function edit (){
    let self = this;
        let inp = document.createElement('input');
        inp.value = self.textContent;
        self.textContent = '';
        self.append(inp);
        inp.focus();
        self.removeEventListener('click',edit);
        inp.addEventListener('blur',function(){
            self.textContent = inp.value;
            setTimeout(function(){
                self.addEventListener('click',edit);
            },200)
        })
}