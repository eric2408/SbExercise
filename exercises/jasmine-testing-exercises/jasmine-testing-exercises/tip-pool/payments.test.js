describe("Payments test", function() {
    beforeEach(function () {
      billAmtInput.value = 500;
      tipAmtInput.value = 50;
    });
  

    it('should add a new payment to allPayments object after submitPaymentInfo()', function () {
      submitPaymentInfo();
  
      expect(Object.keys(allPayments).length).toEqual(1);
      expect(allPayments['payment1'].billAmt).toEqual('500');
      expect(allPayments['payment1'].tipAmt).toEqual('50');
      expect(allPayments['payment1'].tipPercent).toEqual(10);
    });
  
    it('should not add a new payment after submitPaymentInfo() with empty input', function () {
      billAmtInput.value = '';
      submitPaymentInfo();
  
      expect(Object.keys(allPayments).length).toEqual(0);
    });
  

    it('should create a new payment on createCurPayment()', function () {
        let expectedPayment = {
          billAmt: '500',
          tipAmt: '50',
          tipPercent: 10,
        }
    
        expect(createCurPayment()).toEqual(expectedPayment);
      });


    it('should have new payment update on table after appendPaymentTable()', function () {
      let curPayment = createCurPayment();
      allPayments['payment1'] = curPayment;
  
      appendPaymentTable(curPayment);
  
      let serveList = document.querySelectorAll('#paymentTable tbody tr td');
  
      expect(serveList.length).toEqual(4);
      expect(serveList[0].innerText).toEqual('$500');
      expect(serveList[1].innerText).toEqual('$50');
      expect(serveList[2].innerText).toEqual('10%');
      expect(serveList[3].innerText).toEqual('X');
    });
  

    afterEach(function() {
      paymentId = 0;
      allPayments = {};
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
    });
  });