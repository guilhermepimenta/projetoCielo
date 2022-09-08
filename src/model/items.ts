export class Items  { 
    id: string;
    merchantId: string;
    paymentNode: number;
    cnpjRoot: number;
    date: Date;
    paymentType: string;
    cardBrand: string;
    authorizationCode: string;
    truncatedCardNumber: string;
    grossAmount: number;
    netAmount: number;
    terminal: string;
    administrationFee: number;
    channelCode: number;
    channel: string;
    withdrawAmount: number;
    minimumMDRAmmount: number;
    mdrTaxAmount: number;
    mdrFeeAmount: number;
    status: string;

    public constructor (id: string, 
        merchantId: string,
        paymentNode: number,
        cnpjRoot: number,
        date: Date,
        paymentType: string,
        cardBrand: string,
        authorizationCode: string,
        truncatedCardNumber: string,
        grossAmount: number,
        netAmount: number,
        terminal: string,
        administrationFee: number,
        channelCode: number,
        channel: string,
        withdrawAmount: number,
        minimumMDRAmmount: number,
        mdrTaxAmount: number,
        mdrFeeAmount: number,
        status: string,) 
        {   this.id = id;
            this.merchantId = merchantId;
            this.paymentNode = paymentNode;
            this.cnpjRoot = cnpjRoot;
            this.date = date;
            this.paymentType = paymentType;
            this.cardBrand = cardBrand;
            this.authorizationCode = authorizationCode;
            this.truncatedCardNumber = truncatedCardNumber;
            this.grossAmount = grossAmount;
            this.netAmount = netAmount;
            this.terminal = terminal;
            this.administrationFee = administrationFee;
            this.channelCode = channelCode;
            this.channel = channel;
            this.withdrawAmount = withdrawAmount;
            this.minimumMDRAmmount = minimumMDRAmmount;
            this.mdrTaxAmount = mdrTaxAmount;
            this.mdrFeeAmount = mdrFeeAmount;
            this.status = status;
        }
}