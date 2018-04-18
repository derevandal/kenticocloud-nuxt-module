import { DeliveryClient } from 'kentico-cloud-delivery-typescript-sdk'

export default (ctx, inject) => {
  // Todo: supply typeResolvers
  // Create new  delivery client Instance
  var deliveryClient = new DeliveryClient({ 
    projectId: '<%= options.projectId %>',
    typeResolvers: [],
    enableAdvancedLogging: <%= options.enableAdvancedLogging %>,
    enablePreviewMode: <%= options.enablePreviewMode %>,
    defaultLanguage: '<%= options.defaultLanguage %>',
    previewApiKey: '<%= options.previewApiKey %>',
    baseUrl: '<%= options.baseUrl %>'
  });
  
  // Inject the deliveryClient to the context as $deliveryClient
  ctx.$deliveryClient = deliveryClient
  inject('deliveryClient', deliveryClient)
}