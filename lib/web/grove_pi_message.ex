defmodule Web.GrovePiMessage do
    @moduledoc """
  handles JSON websocket messages to and from makecode (pxt) instance
  """

  
  def set_component_type_message(list) do
    IO.puts("message module got set type")
    
    port = list["options"]["port"]
    type = list["deviceType"]

    IO.puts(type)

    case port do
        0 -> Blockytalky.GrovePi.set_component_type(:A0,type)
 	1 -> Blockytalky.GrovePi.set_component_type(:A1,type)
	2 -> Blockytalky.GrovePi.set_component_type(:A2,type)
	3 -> Blockytalky.GrovePi.set_component_type(:D3,type)
	4 -> Blockytalky.GrovePi.set_component_type(:D4,type)
	5 -> Blockytalky.GrovePi.set_component_type(:D5,type)
	6 -> Blockytalky.GrovePi.set_component_type(:D6,type)
	7 -> Blockytalky.GrovePi.set_component_type(:D7,type)
	8 -> Blockytalky.GrovePi.set_component_type(:D8,type)
    end

  end

  def set_component_value_message(list) do
    IO.puts("MESSAGE")

    port = list["options"]["port"]

    case port do
	2 -> Blockytalky.GrovePi.set_component_value(:D2, 1)
	3 -> Blockytalky.GrovePi.set_component_value(:D3, 1)
	4 -> Blockytalky.GrovePi.set_component_value(:D4, 1)
	5 -> Blockytalky.GrovePi.set_component_value(:D5, 1)
	6 -> Blockytalky.GrovePi.set_component_value(:D6, 1)
	7 -> Blockytalky.GrovePi.set_component_value(:D7, 1)
	8 -> Blockytalky.GrovePi.set_component_value(:D8, 1)
	_ -> IO.puts("A non digital port was selected")
    end
    
  end

  def get_component_value_message(list) do
    IO.puts("message module got get value")
  end

end
