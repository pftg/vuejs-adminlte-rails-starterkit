require 'application_system_test_case'

class AppComponentIntegrationsTest < ApplicationSystemTestCase
  driven_by :selenium, using: :headless_chrome

  test 'realtime chat' do
    visit root_path

    within '#chat .card-footer' do
      fill_in 'Type Message ...', with: 'Hey?'
      click_on 'Send'
    end

    within '#chat .card-body' do
      assert_selector '.direct-chat-text', text: 'Hey?'
    end
  end

  test 'traverse through pages' do
    visit root_path

    click_on 'Contact', match: :first

    assert_selector '.jt-title', text: 'Contact'
  end
end
