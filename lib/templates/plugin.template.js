import { DeliveryClient, IDeliveryClientConfig } from 'kentico-cloud-delivery-typescript-sdk'

export default (ctx, inject) => {
  // Todo: supply typeResolvers
  var config = new IDeliveryClientConfig({ 
    projectId: '<%= options.projectId %>',
    typeResolvers: [],
    enableAdvancedLogging: <%= options.enableAdvancedLogging %>,
    enablePreviewMode: <%= options.enablePreviewMode %>,
    defaultLanguage: '<%= options.defaultLanguage %>',
    previewApiKey: '<%= options.previewApiKey %>',
    baseUrl: '<%= options.baseUrl %>'
  });
  
  // Create new  delivery client Instance
  var deliveryClient = new DeliveryClient(config);
  
  // Inject the deliveryClient to the context as $deliveryClient
  ctx.$deliveryClient = deliveryClient
  inject('deliveryClient', deliveryClient)
}