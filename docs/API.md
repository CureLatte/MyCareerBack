# API DOCS 

## Apply 
***
### `GET` /apply/period 
> 지원 기간 조회 API
#### RESPONSE BODY
```javascript
    const body = {
        status: ok,
        data: {
          startDate: "2021-10-10",
          endDate: undefined,
          status: "INIT",
        }
    }
    
```
 
<br> 


### `GET` /apply/status
> 지원 현황 조회 API 
#### RESPONSE BODY
```javascript
    const body = {
      status: ok,
      data: {
        apply_cnt: 10,
        report: 10,
        test: 10, 
        interview: 10,
        result: 10,
      }
        
    }
    
```

<br>
 
 
### `GET` /apply/history
> 지원 내역 조회 API
#### QUERY 
| required | key | value | default |
|----------|-----|------:|--------:|
| false    | cnt |    10 |      10 |

#### RESPONSE BODY
```javascript
const body = {
  status: true,
  body: [
    {
      applyDate: "2021-10-10",
      platform: "사람인",
      companyName: "(주) 회사",
      resumeBranch: "회사이름",
      resumeId: 10,
      status: ""
    }
  ]
}

```


<br>


### `GET` /apply/period/start
> 취업 기간 시작 API
#### RESPONSE BODY
```javascript
const body = {
  status: true,
  body: [
    {
      startDate: "2021-10-10",
      endDate: undefined,
      status: "INIT",
      
    }
  ]
}

```

<br>

### `GET` /apply/timeline
> 지원 현황 타임 라인 조회

#### RESPONSE BODY
```javascript
const body = {
  status: true,
  body: [{
    resumeId: 10,
    startDate: "2024-01-10",
    endDate: undefined,
    companyName: "(주) 회사"
  }, {
    resumeId: 10,
    startDate: "2024-01-10",
    endDate: undefined,
    companyName: "(주) 회사"
  }]
}

```


## Badge
***


### `GET` /badge
> 보유 뱃지 조회 API  
#### RESPONSE BODY
```javascript
const body = {
  status: ok,
  data: [
    {
      name: "피드백",
      value: 10
    },
    {
      name: "업데이트",
      value: 2
    }
  ]
}

```
