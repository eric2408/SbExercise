describe("helper functions test ", function() {
    beforeEach(function () {
      billAmtInput.value = 500;
      tipAmtInput.value = 50;
      submitPaymentInfo();
    });
  
    it('should return total tip amount after sumPaymentTotal()', function () {
      expect(sumPaymentTotal('tipAmt')).toEqual(50);
  
      billAmtInput.value = 300;
      tipAmtInput.value = 30;
  
      submitPaymentInfo();
  
      expect(sumPaymentTotal('tipAmt')).toEqual(80);
    });
  
    it('should return total bill amount after sumPaymentTotal()', function () {
      expect(sumPaymentTotal('billAmt')).toEqual(500);
  
      billAmtInput.value = 300;
      tipAmtInput.value = 30;
  
      submitPaymentInfo();
  
      expect(sumPaymentTotal('billAmt')).toEqual(800);
    });
  
    it('should return total tip percent after sumPaymentTotal()', function () {
      expect(sumPaymentTotal('tipPercent')).toEqual(10);
  
      billAmtInput.value = 500;
      tipAmtInput.value = 50;
  
      submitPaymentInfo();
  
      expect(sumPaymentTotal('tipPercent')).toEqual(20);
    });
  
    it('should calculate tip percent after calculateTipPercent()', function () {
      expect(calculateTipPercent(100, 15)).toEqual(15);
    });
  
    it('should generate new td with the value and append to tr after appendTd(tr, value)', function () {
      let newTr = document.createElement('tr');
  
      appendTd(newTr, 'payment');
  
      expect(newTr.children.length).toEqual(1);
      expect(newTr.firstChild.innerHTML).toEqual('payment');
    });
  
    it('should generate delete button after appendDeleteBtn(tr, type)', function () {
      let newTr = document.createElement('tr');
  
      appendDeleteBtn(newTr);
  
      expect(newTr.children.length).toEqual(1);
      expect(newTr.firstChild.innerHTML).toEqual('X');
    });
  
    afterEach(function() {
      allPayments = {};
      paymentId = 0;
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
    });
  });