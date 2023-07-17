require "test_helper"

class MessagesControllerTest < ActionDispatch::IntegrationTest
  test 'should get home' do
    get messages_home_url
    assert_response :success
  end
end
