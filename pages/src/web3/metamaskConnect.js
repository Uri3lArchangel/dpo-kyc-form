import Web3 from 'web3'

export const connect = async()=>{
    try {
        if(typeof window.ethereum === "undefined"){
            alert('Metamask not found')
            return
        }
        const web3 = new Web3(Web3.givenProvider)
        await web3.eth.requestAccounts()
        let account = await web3.eth.getAccounts()

        return account[0]
    } catch (error) {
        console.log(error)
    }


}