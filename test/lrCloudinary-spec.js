describe('lrCloudinary module', function () {

    var filter;

    beforeEach(module('lrCloudinary', function (lrCloudinaryUrlProvider) {
        lrCloudinaryUrlProvider.setConfig({cloudName: 'test', baseUrl: 'http://example.com/'});
    }));

    beforeEach(inject(function ($filter) {
        filter = $filter('lrCloudinaryFilter');
    }));

    it('should return url based on cloud name configuration and cloudinary public_id (default to jpg extension)', function () {
        expect(filter('public')).toEqual('http://example.com/test/image/upload/public.jpg');
    });

    it('should support partial transformations', function () {
        expect(filter('public', {height: 150})).toEqual('http://example.com/test/image/upload/h_150/public.jpg')
    });

    it('should support multiple transformation', function () {
        expect(filter('public', {width: 100, height: 150, crop: 'fill'})).toEqual('http://example.com/test/image/upload/w_100,h_150,c_fill/public.jpg');
    });

    it('should support other image format', function () {
        expect(filter('public', {format: 'gif'})).toEqual('http://example.com/test/image/upload/public.gif');
    });
});

