import { Component, OnInit } from '@angular/core';

import { MatStepper } from '@angular/material/stepper';

import { environment } from '../environments/environment';

import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  getData:any = []
  opt:any = {
    "a": "",
    "b": "",
    "c": "",
    "d": "",
  }
  scoreArr:any = [
    {question: ""},
    {question: ""},
    {question: ""},
    {question: ""},
    {question: ""},
    {question: ""},
    {question: ""},
    {question: ""},
    {question: ""},
    {question: ""}
  ]
  score:number = 0

  constructor( private http: HttpClient) {}

  ngOnInit() {
  }

  question1(alpha:string, value:string, stepper: MatStepper) {
    let firstQuestion = ""
    const promiseCondition = new Promise((resolve, reject) => {
      if (this.getData.length == 0) {
        this.http.get<any>(environment.apiUrl +"/rest/v2/capital/jakarta").subscribe(result => {
          this.getData = result
          if (result[0].name.toLowerCase() == value.toLowerCase()) {
            this.opt[alpha] = "true"
            setTimeout(() => {
              this.getData = []
              this.opt = {
                "a": "",
                "b": "",
                "c": "",
                "d": "",
              }
              stepper.next()
            },1000)
            firstQuestion = "true"
            resolve("true")
            console.log("true")
          } else {
            this.opt[alpha] = "false"
            firstQuestion = "false"
            resolve("false")
            console.log("false")
          }
        })
      } else {
        if (this.getData[0].name.toLowerCase() == value.toLowerCase()) {
          this.opt[alpha] = "true"
          console.log("true")
          firstQuestion = "true"
          resolve("true")
          setTimeout(() => {
            this.getData = []
            this.opt = {
              "a": "",
              "b": "",
              "c": "",
              "d": "",
            }
            stepper.next()
          },1000)
        } else {
          this.opt[alpha] = "false"
          firstQuestion = "false"
          resolve("false")
          console.log("false")
        }
      }
    })

    promiseCondition.then(res =>{
      if (this.scoreArr[0].question == "") {
        this.scoreArr[0].question = firstQuestion
      }
    })
  }

  question2(alpha:string, value:string, stepper: MatStepper) {
    let firstQuestion = ""
    const promiseCondition = new Promise((resolve, reject) => {
      if (this.getData.length == 0) {
        this.http.get<any>(environment.apiUrl +"/rest/v2/alpha/pse").subscribe(result => {
          this.getData[0] = result
          if (result.alpha3Code.toLowerCase() == value.toLowerCase()) {
            this.opt[alpha] = "true"
            setTimeout(() => {
              this.getData = []
              this.opt = {
                "a": "",
                "b": "",
                "c": "",
                "d": "",
              }
              stepper.next()
            },1000)
            firstQuestion = "true"
            resolve("true")
            console.log("true")
          } else {
            this.opt[alpha] = "false"
            firstQuestion = "false"
            resolve("false")
            console.log("false")
          }
        })
      } else {
        if (this.getData[0].alpha3Code.toLowerCase() == value.toLowerCase()) {
          this.opt[alpha] = "true"
          console.log("true")
          setTimeout(() => {
            this.getData = []
            this.opt = {
              "a": "",
              "b": "",
              "c": "",
              "d": "",
            }
            stepper.next()
            firstQuestion = "true"
            resolve("true")
          },1000)
        } else {
          this.opt[alpha] = "false"
          firstQuestion = "false"
          resolve("false")
          console.log("false")
        }
      }
    })

    promiseCondition.then(res =>{
      if (this.scoreArr[1].question == "") {
        this.scoreArr[1].question = firstQuestion
      }
    })
  }

  question3(alpha:string, value:string, stepper: MatStepper) {
    let firstQuestion = ""
    const promiseCondition = new Promise((resolve, reject) => {
      if (this.getData.length == 0) {
        this.http.get<any>(environment.apiUrl +"/rest/v2/alpha/col").subscribe(result => {
          this.getData[0] = result
          if (result.alpha3Code.toLowerCase() == value.toLowerCase()) {
            this.opt[alpha] = "true"
            setTimeout(() => {
              this.getData = []
              this.opt = {
                "a": "",
                "b": "",
                "c": "",
                "d": "",
              }
              stepper.next()
            },1000)
            firstQuestion = "true"
            resolve("true")
            console.log("true")
          } else {
            this.opt[alpha] = "false"
            firstQuestion = "false"
            resolve("false")
            console.log("false")
          }
        })
      } else {
        if (this.getData[0].alpha3Code.toLowerCase() == value.toLowerCase()) {
          this.opt[alpha] = "true"
          console.log("true")
          setTimeout(() => {
            this.getData = []
            this.opt = {
              "a": "",
              "b": "",
              "c": "",
              "d": "",
            }
            stepper.next()
          },1000)
          firstQuestion = "true"
          resolve("true")
        } else {
          this.opt[alpha] = "false"
          firstQuestion = "false"
          resolve("false")
          console.log("false")
        }
      }
    })

    promiseCondition.then(res =>{
      if (this.scoreArr[2].question == "") {
        this.scoreArr[2].question = firstQuestion
      }
    })
  }

  question4(alpha:string, value:string, stepper: MatStepper) {
    let firstQuestion = ""
    const promiseCondition = new Promise((resolve, reject) => {
      if (this.getData.length == 0) {
        this.http.get<any>(environment.apiUrl +"/rest/v2/currency/iqd").subscribe(result => {
          this.getData = result
          if (result[0].currencies[0].code.toLowerCase() == value.toLowerCase()) {
            this.opt[alpha] = "true"
            setTimeout(() => {
              this.getData = []
              this.opt = {
                "a": "",
                "b": "",
                "c": "",
                "d": "",
              }
              stepper.next()
            },1000)
            firstQuestion = "true"
            resolve("true")
            console.log("true")
          } else {
            this.opt[alpha] = "false"
            firstQuestion = "false"
            resolve("false")
            console.log("false")
          }
        })
      } else {
        if (this.getData[0].currencies[0].code.toLowerCase() == value.toLowerCase()) {
          this.opt[alpha] = "true"
          console.log("true")
          setTimeout(() => {
            this.getData = []
            this.opt = {
              "a": "",
              "b": "",
              "c": "",
              "d": "",
            }
            stepper.next()
          },1000)
          firstQuestion = "true"
          resolve("true")
        } else {
          this.opt[alpha] = "false"
          firstQuestion = "false"
          resolve("false")
          console.log("false")
        }
      }
    })

    promiseCondition.then(res =>{
      if (this.scoreArr[3].question == "") {
        this.scoreArr[3].question = firstQuestion
      }
    })
  }

  question5(alpha:string, value:string, stepper: MatStepper) {
    let firstQuestion = ""
    const promiseCondition = new Promise((resolve, reject) => {
      if (this.getData.length == 0) {
        this.http.get<any>(environment.apiUrl +"/rest/v2/lang/es").subscribe(result => {
          this.getData = result
          const findCountry = result.find((item:any) => {
            return item.name.toLowerCase() == value.toLowerCase()
          })
          if (findCountry) {
            this.opt[alpha] = "false"
            firstQuestion = "false"
            resolve("false")
            console.log("false")
          } else {
            this.opt[alpha] = "true"
            console.log("true")
            setTimeout(() => {
              this.getData = []
              this.opt = {
                "a": "",
                "b": "",
                "c": "",
                "d": "",
              }
              stepper.next()
            },1000)
            firstQuestion = "true"
            resolve("true")
          }
        })
      } else {
        const findCountry = this.getData.find((item:any) => {
          return item.name.toLowerCase() == value.toLowerCase()
        })
        if (findCountry) {
          this.opt[alpha] = "false"
          firstQuestion = "false"
          resolve("false")
          console.log("false")
        } else {
          this.opt[alpha] = "true"
          console.log("true")
          setTimeout(() => {
            this.getData = []
            this.opt = {
              "a": "",
              "b": "",
              "c": "",
              "d": "",
            }
            stepper.next()
          },1000)
          firstQuestion = "true"
          resolve("true")
        }
      }
    })

    promiseCondition.then(res =>{
      if (this.scoreArr[4].question == "") {
        this.scoreArr[4].question = firstQuestion
      }
    })
  }

  question6(alpha:string, value:string, stepper: MatStepper) {
    let firstQuestion = ""
    const promiseCondition = new Promise((resolve, reject) => {
      if (this.getData.length == 0) {
        this.http.get<any>(environment.apiUrl +"/rest/v2/callingcode/221").subscribe(result => {
          this.getData = result
          const findCountry = result.find((item:any) => {
            return item.name.toLowerCase() == value.toLowerCase()
          })
          if (findCountry) {
            this.opt[alpha] = "true"
            console.log("true")
            setTimeout(() => {
              this.getData = []
              this.opt = {
                "a": "",
                "b": "",
                "c": "",
                "d": "",
              }
              stepper.next()
            },1000)
            firstQuestion = "true"
            resolve("true")
          } else {
            this.opt[alpha] = "false"
            firstQuestion = "false"
            resolve("false")
            console.log("false")
          }
        })
      } else {
        const findCountry = this.getData.find((item:any) => {
          return item.name.toLowerCase() == value.toLowerCase()
        })
        if (findCountry) {
          this.opt[alpha] = "true"
          console.log("true")
          setTimeout(() => {
            this.getData = []
            this.opt = {
              "a": "",
              "b": "",
              "c": "",
              "d": "",
            }
            stepper.next()
          },1000)
          firstQuestion = "true"
          resolve("true")
        } else {
          this.opt[alpha] = "false"
          firstQuestion = "false"
          resolve("false")
          console.log("false")
        }
      }
    })

    promiseCondition.then(res =>{
      if (this.scoreArr[5].question == "") {
        this.scoreArr[5].question = firstQuestion
      }
    })
  }

  question7(alpha:string, value:string, stepper: MatStepper) {
    let firstQuestion = ""
    const promiseCondition = new Promise((resolve, reject) => {
      if (this.getData.length == 0) {
        this.http.get<any>(environment.apiUrl +"/rest/v2/name/pakistan").subscribe(result => {
          this.getData = result
          const findCountry = result.find((item:any) => {
            return item.currencies[0].code.toLowerCase() == value.toLowerCase()
          })
          if (findCountry) {
            this.opt[alpha] = "true"
            console.log("true")
            setTimeout(() => {
              this.getData = []
              this.opt = {
                "a": "",
                "b": "",
                "c": "",
                "d": "",
              }
              stepper.next()
            },1000)
            firstQuestion = "true"
            resolve("true")
          } else {
            this.opt[alpha] = "false"
            firstQuestion = "false"
            resolve("false")
            console.log("false")
          }
        })
      } else {
        const findCountry = this.getData.find((item:any) => {
          return item.currencies[0].code.toLowerCase() == value.toLowerCase()
        })
        if (findCountry) {
          this.opt[alpha] = "true"
          console.log("true")
          setTimeout(() => {
            this.getData = []
            this.opt = {
              "a": "",
              "b": "",
              "c": "",
              "d": "",
            }
            stepper.next()
          },1000)
          firstQuestion = "true"
          resolve("true")
        } else {
          this.opt[alpha] = "false"
          firstQuestion = "false"
          resolve("false")
          console.log("false")
        }
      }
    })

    promiseCondition.then(res =>{
      if (this.scoreArr[6].question == "") {
        this.scoreArr[6].question = firstQuestion
      }
    })
  }

  question8(alpha:string, value:string, stepper: MatStepper) {
    let firstQuestion = ""
    const promiseCondition = new Promise((resolve, reject) => {
      if (this.getData.length == 0) {
        this.http.get<any>(environment.apiUrl +"/rest/v2/name/qatar").subscribe(result => {
          this.getData = result
          const findCountry = result.find((item:any) => {
            return item.capital.toLowerCase() == value.toLowerCase()
          })
          if (findCountry) {
            this.opt[alpha] = "true"
            console.log("true")
            setTimeout(() => {
              this.getData = []
              this.opt = {
                "a": "",
                "b": "",
                "c": "",
                "d": "",
              }
              stepper.next()
            },1000)
            firstQuestion = "true"
            resolve("true")
          } else {
            this.opt[alpha] = "false"
            firstQuestion = "false"
            resolve("false")
            console.log("false")
          }
        })
      } else {
        const findCountry = this.getData.find((item:any) => {
          return item.capital.toLowerCase() == value.toLowerCase()
        })
        if (findCountry) {
          this.opt[alpha] = "true"
          console.log("true")
          setTimeout(() => {
            this.getData = []
            this.opt = {
              "a": "",
              "b": "",
              "c": "",
              "d": "",
            }
            stepper.next()
          },1000)
          firstQuestion = "true"
          resolve("true")
        } else {
          this.opt[alpha] = "false"
          firstQuestion = "false"
          resolve("false")
          console.log("false")
        }
      }
    })

    promiseCondition.then(res =>{
      if (this.scoreArr[7].question == "") {
        this.scoreArr[7].question = firstQuestion
      }
    })
  }
  question9(alpha:string, value:string, stepper: MatStepper) {
    let firstQuestion = ""
    const promiseCondition = new Promise((resolve, reject) => {
      if (this.getData.length == 0) {
        this.http.get<any>(environment.apiUrl +"/rest/v2/name/turkey").subscribe(result => {
          this.getData = result
          const findCountry = result.find((item:any) => {
            return item.region.toLowerCase() == value.toLowerCase()
          })
          if (findCountry) {
            this.opt[alpha] = "true"
            console.log("true")
            setTimeout(() => {
              this.getData = []
              this.opt = {
                "a": "",
                "b": "",
                "c": "",
                "d": "",
              }
              stepper.next()
            },1000)
            firstQuestion = "true"
            resolve("true")
          } else {
            this.opt[alpha] = "false"
            firstQuestion = "false"
            resolve("false")
            console.log("false")
          }
        })
      } else {
        const findCountry = this.getData.find((item:any) => {
          return item.region.toLowerCase() == value.toLowerCase()
        })
        if (findCountry) {
          this.opt[alpha] = "true"
          console.log("true")
          setTimeout(() => {
            this.getData = []
            this.opt = {
              "a": "",
              "b": "",
              "c": "",
              "d": "",
            }
            stepper.next()
          },1000)
          firstQuestion = "true"
          resolve("true")
        } else {
          this.opt[alpha] = "false"
          firstQuestion = "false"
          resolve("false")
          console.log("false")
        }
      }
    })

    promiseCondition.then(res =>{
      if (this.scoreArr[8].question == "") {
        this.scoreArr[8].question = firstQuestion
      }
    })
  }

  question10(alpha:string, value:string, stepper: MatStepper) {
    let firstQuestion = ""
    const promiseCondition = new Promise((resolve, reject) => {
      if (this.getData.length == 0) {
        this.http.get<any>(environment.apiUrl +"/rest/v2/name/Singapore").subscribe(result => {
          this.getData = result
          const findCountry = result[0].languages.find((item:any) => {
            return item.name.toLowerCase() == value.toLowerCase()
          })
          if (findCountry) {
            this.opt[alpha] = "false"
            firstQuestion = "false"
            resolve("false")
            console.log("false")
          } else {
            this.opt[alpha] = "true"
            console.log("true")
            setTimeout(() => {
              this.getData = []
              this.opt = {
                "a": "",
                "b": "",
                "c": "",
                "d": "",
              }
              stepper.next()
            },1000)
            firstQuestion = "true"
            resolve("true")
          }
        })
      } else {
        const findCountry = this.getData[0].languages.find((item:any) => {
          return item.name.toLowerCase() == value.toLowerCase()
        })
        if (findCountry) {
          this.opt[alpha] = "false"
          firstQuestion = "false"
          resolve("false")
          console.log("false")
        } else {
          this.opt[alpha] = "true"
          console.log("true")
          setTimeout(() => {
            this.getData = []
            this.opt = {
              "a": "",
              "b": "",
              "c": "",
              "d": "",
            }
            stepper.next()
          },1000)
          firstQuestion = "true"
          resolve("true")
        }
      }

    })

    promiseCondition.then(res =>{
      if (this.scoreArr[9].question == "") {
        this.scoreArr[9].question = firstQuestion
      }

      this.score = this.scoreArr.filter((item:any) => {
        return item.question == "true"
      }).length
    })
  }
}
