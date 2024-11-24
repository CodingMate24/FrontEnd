import Axios from 'axios';

export class Transaction {

    static sendTransaction(method, url, param){
        const AxiosInst = Axios.create({
            baseURL : 'http://localhost:8080'
        })

        // 모든 요청을 intercept 해서 header값 설정(토큰)
        // : Axios request일때 이 설정값을 사용한다는 것
        AxiosInst.interceptors.request.use(
            (config) => {
                let access_token = "storeToken";
                if(access_token) {
                    config.headers.authorization = '';
                }
                config.headers['Access-Control-Allow-Origin'] = '*';  // CORS 설정(모든 리소스 허용)
                return config;
            }
        )

        return AxiosInst({
                method: method,
                url: url,
                params: param,
            })
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.error(err);
            }
        );
    }
}